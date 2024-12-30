import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import searchReducer from "./search/search.reducer";
import dataSearchReducer from "./dataSearch/dataSearch-slice";
import bookingReducer from "./booking/booking.reducer";
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
    "price",
    "userInfo",
    "quantity",
    "name",
  ],
};

const rootReducer = combineReducers({
  clicked: searchReducer,
  dataSearch: dataSearchReducer,
  price: bookingReducer,
  name: bookingReducer,
  index: bookingReducer,
  userInfo: userInfoReducer,
  quantity: userInfoReducer,
  technical: technicalReducer,
});

export default persistReducer(persistConfig, rootReducer);
