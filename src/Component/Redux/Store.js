import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";

const Store = configureStore({
  reducer: {
    contactKey: contactSlice,
  },
});

export default Store;
