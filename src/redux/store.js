import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import cartReducer from './cartSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
        ui: uiReducer,
    },
});