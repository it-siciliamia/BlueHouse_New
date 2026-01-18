# Beds24 API Data Structure Documentation

## Available API Functions

### 1. `axiosGetRoomDetails()`
**Purpose**: Get all rooms with basic details and features
**Returns**: Array of room objects

### 2. `axiosGetRoomAvailability(roomId, startDate, endDate)`
**Purpose**: Get availability for specific room(s) and date range
**Parameters**:
- `roomId`: Number or Array of room IDs
- `startDate`: String (YYYY-MM-DD)
- `endDate`: String (YYYY-MM-DD)

### 3. `axiosGetRoomPrices(roomId, startDate, endDate)`
**Purpose**: Get pricing for specific room(s) and date range
**Parameters**: Same as availability

### 4. `axiosGetComprehensiveRoomData(startDate, endDate)`
**Purpose**: Get all room data combined (recommended for frontend)
**Parameters**:
- `startDate`: String (YYYY-MM-DD)
- `endDate`: String (YYYY-MM-DD)

---

## Data Structure Reference

### Room Object Structure
```javascript
{
  roomId: 12345,
  roomName: "Economy Double Room",
  roomType: "double",
  propertyId: 307519,
  maxOccupancy: 2,
  bedType: "queen",
  roomSize: 25,
  floor: 1,
  features: [
    "wifi",
    "tv",
    "shared_bathroom",
    "breakfast_included"
  ],
  amenities: {
    wifi: true,
    tv: true,
    airConditioning: false,
    privateBathroom: false,
    kitchenette: false,
    balcony: false,
    seaview: true,
    parking: true
  },
  images: [
    "https://beds24.com/images/room1.jpg",
    "https://beds24.com/images/room2.jpg"
  ],
  description: "Room description text",
  isActive: true,
  created: "2023-01-01T00:00:00Z",
  modified: "2024-01-01T00:00:00Z"
}
```

### Availability Object Structure
```javascript
{
  roomId: 12345,
  date: "2024-01-15",
  available: 3,
  booked: 0,
  blocked: 0,
  total: 3,
  status: "available", // "available", "limited", "unavailable"
  minStay: 1,
  maxStay: 30,
  checkInAllowed: true,
  checkOutAllowed: true
}
```

### Pricing Object Structure
```javascript
{
  roomId: 12345,
  date: "2024-01-15",
  basePrice: 85.00,
  currency: "EUR",
  taxes: 8.50,
  fees: 5.00,
  totalPrice: 98.50,
  discounts: [
    {
      type: "early_bird",
      amount: 10.00,
      percentage: false
    }
  ],
  rateType: "standard", // "standard", "non_refundable", "flexible"
  cancellationPolicy: "free_cancellation_24h"
}
```

### Property Object Structure
```javascript
{
  propertyId: 307519,
  propertyName: "Blue House",
  address: {
    street: "Property Address",
    city: "Grindavik",
    country: "Iceland",
    postalCode: "240",
    coordinates: {
      latitude: 63.8424,
      longitude: -22.4343
    }
  },
  contact: {
    phone: "+354-xxx-xxxx",
    email: "info@bluehouse.is",
    website: "https://bluehouse.is"
  },
  facilities: [
    "free_wifi",
    "free_parking",
    "breakfast",
    "kitchen_facilities",
    "garden",
    "terrace"
  ],
  checkIn: "15:00",
  checkOut: "11:00",
  currency: "EUR",
  timezone: "Atlantic/Reykjavik"
}
```

### Room Type Object Structure
```javascript
{
  roomTypeId: 1,
  name: "Economy Double Room",
  description: "Budget-friendly room with shared facilities",
  maxOccupancy: 2,
  bedConfiguration: "1 Queen Bed",
  roomSize: 25,
  features: [
    "Shared Bathroom",
    "Netflix TV",
    "Free WiFi",
    "Continental Breakfast"
  ],
  images: ["url1", "url2"],
  basePrice: 80.00
}
```

### Comprehensive Data Response Structure
```javascript
{
  rooms: [/* Array of Room Objects */],
  property: {/* Property Object */},
  roomTypes: [/* Array of Room Type Objects */],
  inventory: {
    availability: [/* Array of Availability Objects */],
    pricing: [/* Array of Pricing Objects */]
  },
  timestamp: "2024-01-15T10:30:00Z"
}
```

---

## Usage Examples

### Get All Room Data for Date Range
```javascript
import { axiosGetComprehensiveRoomData } from '../api/api';

const fetchRoomData = async () => {
  try {
    const data = await axiosGetComprehensiveRoomData('2024-02-01', '2024-02-07');
    console.log('Rooms:', data.rooms);
    console.log('Availability:', data.inventory.availability);
    console.log('Prices:', data.inventory.pricing);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Get Specific Room Availability
```javascript
import { axiosGetRoomAvailability } from '../api/api';

const checkAvailability = async () => {
  try {
    const availability = await axiosGetRoomAvailability(
      [12345, 12346], 
      '2024-02-01', 
      '2024-02-07'
    );
    console.log('Availability:', availability);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## Error Handling

All API functions return promises and should be wrapped in try-catch blocks:

```javascript
try {
  const data = await axiosGetRoomDetails();
  // Handle success
} catch (error) {
  console.error('API Error:', error.message);
  // Handle error - show user message, retry, etc.
}
```

## Notes for Frontend Team

1. **Date Format**: Always use YYYY-MM-DD format for dates
2. **Room IDs**: Can be single number or array of numbers
3. **Currency**: All prices are in EUR unless specified
4. **Caching**: Consider caching room details as they change infrequently
5. **Real-time Data**: Availability and pricing should be fetched fresh for each search
6. **Error States**: Always handle loading and error states in UI components