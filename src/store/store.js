import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice'; // reducer

export default configureStore({
  reducer: {
    input: inputReducer, //add our reducer
  },
});
