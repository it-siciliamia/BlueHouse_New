export const getCheckInDay = ({ dataSearch }) => dataSearch.checkIn;
export const getCheckOutDay = ({ dataSearch }) => dataSearch.checkOut;
export const getAddParams = ({ dataSearch }) => dataSearch.addParams;
export const getAppartmentName = ({ dataSearch }) => dataSearch.appartmentName;
export const getPricePerNight = ({ dataSearch }) => dataSearch.pricePerNight;
export const getDayDifference = ({ dataSearch }) => dataSearch.dayDifference;
export const getPaymentType = ({ dataSearch }) => dataSearch.paymentType;
export const getTotalAmountEuro = ({ dataSearch }) =>
  dataSearch.totalAmountEuro;
export const getCurrency = ({ dataSearch }) => dataSearch.currency;
export const getTotalAmountCurrency = ({ dataSearch }) =>
  dataSearch.totalAmountCurrency;
