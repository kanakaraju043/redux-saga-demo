import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({

    name: 'cats',
    initialState: {
        cats: [],
        isLoading: false
    },
    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true;
        },
        getCateSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getCatsFailure: (state) => {
            state.isLoading = false;
        }
    }

})

export const { getCatsFetch, getCateSuccess, getCatsFailure} = catSlice.actions;
export default catSlice.reducer;