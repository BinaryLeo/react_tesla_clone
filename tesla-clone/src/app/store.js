import { configureStore } from '@reduxjs/toolkit';
import CarReducer from '../features/car/CarSlice';

export const store = configureStore({
  reducer: {
    car: CarReducer,
  },
});
