// frontend/services/apiService.js

const API_URL = "http://localhost:3001/api"; // Backend server URL

// Get authentication headers
const getAuthHeaders = () => {
    return {
        "Content-Type": "application/json",
        token: localStorage.getItem("authToken"), // Ensure token is stored after login
    };
};

// Fetch room descriptions from the backend API
export const fetchRooms = async () => {
    try {
        const response = await fetch(`${API_URL}/properties`, { headers: getAuthHeaders() });
        if (!response.ok) throw new Error("Failed to fetch rooms");
        return await response.json();
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return { success: false, message: error.message };
    }
};

// Fetch room availability from the backend API
export const fetchAvailability = async (roomId, startDate, endDate) => {
    try {
        const response = await fetch(`${API_URL}/inventory?roomId=${roomId}&startDate=${startDate}&endDate=${endDate}`, { headers: getAuthHeaders() });
        if (!response.ok) throw new Error("Failed to fetch availability");
        return await response.json();
    } catch (error) {
        console.error("Error fetching availability:", error);
        return { success: false, message: error.message };
    }
};

// Create a new booking
export const createBooking = async (roomId, guestDetails, checkIn, checkOut) => {
    try {
        const response = await fetch(`${API_URL}/bookings`, {
            method: "POST",
            body: JSON.stringify({ roomId, guestDetails, checkIn, checkOut }),
            headers: getAuthHeaders(),
        });

        if (!response.ok) throw new Error("Failed to create booking");
        return await response.json();
    } catch (error) {
        console.error("Error creating booking:", error);
        return { success: false, message: error.message };
    }
};

// Create a Stripe session for payment
export const createStripeSession = async (price, currency, bookingId) => {
    try {
        const response = await fetch(`${API_URL}/create-stripe-session`, {
            method: "POST",
            body: JSON.stringify({ price, currency, bookingId }),
            headers: getAuthHeaders(),
        });

        if (!response.ok) throw new Error("Failed to create Stripe session");
        return await response.json();
    } catch (error) {
        console.error("Error creating Stripe session:", error);
        return { success: false, message: error.message };
    }
};
