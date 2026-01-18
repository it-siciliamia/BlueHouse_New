import axiosClient from './axiosClient';
import beds24RoomService from './beds24RoomService';

// Export the main API functions
export const axiosCreateNewBooking = async (bookingData) => {
  try {
    const response = await axiosClient.post('/bookings', bookingData);
    return response;
  } catch (error) {
    console.error('Booking creation failed:', error);
    throw error;
  }
};

export const axiosCreateStripeSession = async (sessionData) => {
  try {
    const response = await axiosClient.post('/create-stripe-session', sessionData);
    return response;
  } catch (error) {
    console.error('Stripe session creation failed:', error);
    throw error;
  }
};

export const axiosGetAvailableRooms = async (searchParams) => {
  try {
    const response = await axiosClient.get('/inventory', { params: searchParams });
    return response;
  } catch (error) {
    console.error('Room availability fetch failed:', error);
    throw error;
  }
};

export const axiosGetRoomsData = async () => {
  try {
    const response = await axiosClient.get('/properties');
    return response;
  } catch (error) {
    console.error('Rooms data fetch failed:', error);
    throw error;
  }
};

// New comprehensive room data functions
export const axiosGetRoomDetails = async () => {
  try {
    const response = await beds24RoomService.getRoomsWithDetails();
    return response;
  } catch (error) {
    console.error('Room details fetch failed:', error);
    throw error;
  }
};

export const axiosGetRoomAvailability = async (roomId, startDate, endDate) => {
  try {
    const response = await beds24RoomService.getRoomAvailability(roomId, startDate, endDate);
    return response;
  } catch (error) {
    console.error('Room availability fetch failed:', error);
    throw error;
  }
};

export const axiosGetRoomPrices = async (roomId, startDate, endDate) => {
  try {
    const response = await beds24RoomService.getRoomPrices(roomId, startDate, endDate);
    return response;
  } catch (error) {
    console.error('Room prices fetch failed:', error);
    throw error;
  }
};

export const axiosGetComprehensiveRoomData = async (startDate, endDate) => {
  try {
    const response = await beds24RoomService.getComprehensiveRoomData(startDate, endDate);
    return response;
  } catch (error) {
    console.error('Comprehensive room data fetch failed:', error);
    throw error;
  }
};

export default axiosClient;