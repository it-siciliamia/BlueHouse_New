import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import dataSearchReducer from "./dataSearch/dataSearch-slice";
import bookingReducer from "./booking/booking-slice";
import technicalReducer from "./technitial/technical-slice";
import userInfoReducer from "./userInfo/userInfo-slice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "checkIn",
    "checkOut",
    "clicked",
    "dayDifference",
    "userInfo",
    "name",
  ],
};

const rootReducer = combineReducers({
  dataSearch: dataSearchReducer,
  userInfo: userInfoReducer,
  technical: technicalReducer,
  booking: bookingReducer,
});

export default persistReducer(persistConfig, rootReducer);
