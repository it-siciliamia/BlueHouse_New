const axiosClient = require('./axiosClient');

class Beds24RoomService {
  constructor() {
    this.propertyId = process.env.BEDS24_PROPERTY_ID;
  }

  // Get all rooms with details and features
  async getRoomsWithDetails() {
    try {
      const response = await axiosClient.get('/rooms', {
        params: {
          propertyId: this.propertyId,
          includeInactive: false
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  }

  // Get room availability for specific dates
  async getRoomAvailability(roomId, startDate, endDate) {
    try {
      const response = await axiosClient.get('/inventory/rooms/availability', {
        params: {
          roomId: Array.isArray(roomId) ? roomId : [roomId],
          propertyId: this.propertyId,
          startDate,
          endDate
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching room availability:', error);
      throw error;
    }
  }

  // Get room prices for specific dates
  async getRoomPrices(roomId, startDate, endDate) {
    try {
      const response = await axiosClient.get('/inventory/rooms/prices', {
        params: {
          roomId: Array.isArray(roomId) ? roomId : [roomId],
          propertyId: this.propertyId,
          startDate,
          endDate
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching room prices:', error);
      throw error;
    }
  }

  // Get property details with all rooms
  async getPropertyWithRooms() {
    try {
      const response = await axiosClient.get('/properties', {
        params: {
          propertyId: this.propertyId,
          includeAllRooms: true,
          includePictures: true,
          includeRoomTypes: true
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching property details:', error);
      throw error;
    }
  }

  // Get room inventory (availability + prices combined)
  async getRoomInventory(roomIds, startDate, endDate) {
    try {
      const response = await axiosClient.get('/inventory', {
        params: {
          roomId: Array.isArray(roomIds) ? roomIds : [roomIds],
          propertyId: this.propertyId,
          startDate,
          endDate,
          includeAvailability: true,
          includePrices: true
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching room inventory:', error);
      throw error;
    }
  }

  // Get all room types with features
  async getRoomTypes() {
    try {
      const response = await axiosClient.get('/roomtypes', {
        params: {
          propertyId: this.propertyId
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching room types:', error);
      throw error;
    }
  }

  // Get comprehensive room data (combines multiple endpoints)
  async getComprehensiveRoomData(startDate, endDate) {
    try {
      const [rooms, property, roomTypes] = await Promise.all([
        this.getRoomsWithDetails(),
        this.getPropertyWithRooms(),
        this.getRoomTypes()
      ]);

      // Get availability and prices for all rooms
      const roomIds = rooms.data?.map(room => room.roomId) || [];
      const inventory = roomIds.length > 0 ? 
        await this.getRoomInventory(roomIds, startDate, endDate) : null;

      return {
        rooms: rooms.data,
        property: property.data,
        roomTypes: roomTypes.data,
        inventory: inventory?.data,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching comprehensive room data:', error);
      throw error;
    }
  }
}

module.exports = new Beds24RoomService();