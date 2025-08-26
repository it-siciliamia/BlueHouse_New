const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const axiosClient = require('./axiosClient');
const crypto = require("crypto");

router.use(bodyParser.json());
router.use(cors({ origin: "*" }));
router.use((req, res, next) => {
    console.log("Incoming Request:", req.method, req.url);
    next();
});


console.log("AxiosClient initialized:", axiosClient);

const roomIds = [9748, 7264, 59038, 110158, 42714];

let authInitialized = false;
let tokenExpirationTime = null;

async function ensureAuthentication() {
    const now = Date.now();
    const isTokenExpired = !tokenExpirationTime || now >= (tokenExpirationTime - 300000);
    
    if (!authInitialized || isTokenExpired) {
      try {
        const auth = await axiosClient.initializeAuth();
        console.log('Authentication successful. Token expires in:', auth.expiresIn, 'seconds');
        tokenExpirationTime = now + (auth.expiresIn * 1000);
        authInitialized = true;
        return auth; // ✅ Return auth object
      } catch (error) {
        console.error('Failed to initialize Beds24 authentication:', error.message);
        throw error;
      }
    }
    return { token: axiosClient.token }; // ✅ Ensure a token is always returned
  }
  

// Get Descriptions for rooms

// Get Rooms with Pictures
router.get("/properties", async (req, res) => {
    try {
        const auth = await ensureAuthentication();
        
        // Extract query parameters
        const { includeAllRooms = "true", includePictures = "true" } = req.query;

        // Convert boolean parameters from string to actual boolean
        const queryParams = {
            includeAllRooms: includeAllRooms === "true",
            includePictures: includePictures === "true",
        };

        const response = await axiosClient.get("/properties", {
            headers: { token: auth.token },
            params: queryParams
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching rooms with pictures:", error.response?.data || error.message);
        res.status(500).send("Error fetching room details");
    }
});


// Get Room Availability
router.get("/inventory", async (req, res) => {
    try {
        const auth = await ensureAuthentication();
        const { roomId, propertyId, startDate, endDate, page = 1 } = req.query;

        if (!roomId || !startDate || !endDate) {
            return res.status(400).json({ error: "roomId, startDate, and endDate are required" });
        }

        const response = await axiosClient.get("/inventory/rooms/availability", {
            headers: { token: auth.token },
            params: {
                roomId: Array.isArray(roomId) ? roomId : [roomId], // Ensure array format
                propertyId: propertyId ? (Array.isArray(propertyId) ? propertyId : [propertyId]) : undefined,
                startDate,
                endDate,
                page
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching room availability:", error.response?.data || error.message);
        res.status(500).send("Error fetching room availability");
    }
});


// Create a new booking
router.post("/bookings", async (req, res) => {
    try {
        const auth = await ensureAuthentication();
        const bookingid = crypto.randomUUID();
        const {
            roomId,
            status = "confirmed", // Default to "confirmed"
            arrival,
            departure,
            numAdult,
            numChild = 0, // Default to 0 if not provided
            firstName,
            lastName,
            email,
            mobile,
            address,
            city,
            state,
            postcode,
            country
        } = req.body;

        if (!roomId || !arrival || !departure || !numAdult || !firstName || !lastName || !email) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        

        const response = await axiosClient.post("/bookings", [{
            bookingid,
            roomId,
            status,
            arrival,
            departure,
            numAdult,
            numChild,
            title: "Mr", // Can be dynamic if needed
            firstName,
            lastName,
            email,
            mobile,
            address,
            city,
            state,
            postcode,
            country
        }], { headers: { token: auth.token } });

        res.json(bookingid, "booking created successfull",response.data);
    } catch (error) {
        console.error("Error creating booking:", error.response?.data || error.message);
        res.status(500).json({ error: "Booking failed" });
    }
});

// Create Stripe Session for payment
router.post("/create-stripe-session", async (req, res) => {
    try {
        const auth = await ensureAuthentication()
        const { bookingId, price, currency = "eur", successUrl, cancelUrl } = req.body;

        if (!bookingId || !price || !successUrl || !cancelUrl) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const response = await axiosClient.post("/channels/stripe", [{
            action: "createStripeSession",
            bookingId,
            line_items: [{
                price_data: {
                    currency,
                    product_data: { name: "Accommodation" },
                    unit_amount: price * 100 // Convert to cents
                },
                quantity: 1
            }],
            success_url: successUrl,
            cancel_url: cancelUrl,
            capture: true
        }], { headers: { token: auth.token } });

        res.json(response.data);
    } catch (error) {
        console.error("Error creating Stripe session:", error.response?.data || error.message);
        res.status(500).json({ error: "Payment session creation failed" });
    }
});

module.exports = router;
