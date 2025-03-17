import { configureStore } from '@reduxjs/toolkit';

import { formManagementSlice } from '@/features/FormManagement/api/slices/FormManagementSlice';

export const store = configureStore({
  reducer: {
    [formManagementSlice.reducerPath]: formManagementSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(formManagementSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
