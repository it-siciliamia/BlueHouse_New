import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import searchReducer from "./search/search.reducer";
import dataSearchReducer from "./dataSearch/dataSearch-slice";
import bookingReducer from "./booking/booking-slice";
import technicalReducer from "./technitial/technical-slice";
import userInfoReducer from "./userInfo/userInfo.reducer";
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
    "quantity",
    "name",
  ],
};

const rootReducer = combineReducers({
  clicked: searchReducer,
  dataSearch: dataSearchReducer,
  userInfo: userInfoReducer,
  quantity: userInfoReducer,
  technical: technicalReducer,
  booking: bookingReducer,
});

export default persistReducer(persistConfig, rootReducer);
