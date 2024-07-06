import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import registrationReducer from '../redux/RegistrationSlice';

const store = configureStore({
    reducer: {
      registration: registrationReducer,
    },
  });
  
  setupListeners(store.dispatch);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;