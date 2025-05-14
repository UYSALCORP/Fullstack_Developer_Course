import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name:"stock",
    initialState:{
        loading: false,
        error: false,
        token: null,
        firms:[],
        brands:[],
        purchases:[],
        sales:[],
        products:[],
        categories:[]
    },
    reducers:{
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
          },
          fetchFail: (state) => {
            state.loading = false;
            state.error = true;
          },
          //! Statik olan yapımızı dinamikleştirdik.
          // firmSuccess: (state, {payload}) => {
          //   state.firms = payload.data;
          //   state.loading = false;
          //   state.error = false;
          // },
          stockSuccess: (state, {payload}) => {
            state[payload.url] = payload.data.data;
            state.loading = false;
            state.error = false;
          },
          //! Promise.All() 
          getProCatBrandSuccess:(state, {payload})=>{
            state.loading= false
            state.products = payload[0]
            state.categories = payload[1]
            state.brands = payload[2]
          },
          getPurcBrandProSuccess:(state, {payload})=>{
            state.loading= false
            state.purchases = payload[0]
            state.brands = payload[1]
            state.products = payload[2]
            state.firms = payload[3]
          },
          getSalesBrandProSuccess:(state, {payload})=>{
            state.loading= false
            state.sales = payload[0].data
            state.brands = payload[1].data
            state.products = payload[2].data
          }
    }
})

export const {fetchFail, fetchStart, stockSuccess, getProCatBrandSuccess, getPurcBrandProSuccess, getSalesBrandProSuccess} = stockSlice.actions;
export default stockSlice.reducer;