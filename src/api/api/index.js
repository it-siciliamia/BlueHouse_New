import axiosClient from './axiosClient';

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

export default axiosClient;