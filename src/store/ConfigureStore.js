import { configureStore } from '@reduxjs/toolkit'


export const ConfigureStore = configureStore({
        reducer:{
            mealReducer: mealReducer
    }
})