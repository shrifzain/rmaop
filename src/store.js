import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './features/salesMangement/invoiceSlice'
const store = configureStore({
  reducer: {
    invoice:invoiceReducer
  },
});

export default store;
