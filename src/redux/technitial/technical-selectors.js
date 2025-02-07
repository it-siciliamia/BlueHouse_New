export const getTechnicalError = ({ technical }) => technical.error;
export const getTechnicalMessage = ({ technical }) => technical.message;
export const getIsPlaceholderShown = ({ technical }) =>
  technical.isPlaceholderShown;
export const getPaymentStage = ({ technical }) => technical.paymentStage;
export const getBookingConfirmed = ({ technical }) =>
  technical.bookingConfirmed;
