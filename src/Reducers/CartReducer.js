import { createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import { ConfigureStore } from "../ConfigureStore";

const initialState = {
    cart : [],
    isLoading: false,
    isError: false
}

// export type AppDispatch = typeof ConfigureStore.dispatch;
const mealReducer = createSlice({
    name:"list",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.cart = [{ ...state.cart, ...action.payload }];
        }, 

    },
    extraReducers: (builder) => {
        builder.addCase(fetchMeals.pending, (state, action) => {
         state.isLoading = true;
        })
        builder.addCase(fetchMeals.fulfilled, (state, action) => {
         state.isLoading = false;
         state.mealsList = action.payload;
        })
        builder.addCase(fetchMeals.rejected, (state, action) => {
         state.isError = true;
        })
       }
});

export const {updateShippingInfo} = mealReducer.actions

export default CartReducer.reducer;