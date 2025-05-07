import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  products: [],
  tempProducts: [],
  loading: false,
  error: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    }, 
    setTempProducts: (state, action) => {
      state.tempProducts = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }, 
    setError: (state, action) => {
      state.error = action.payload
    },
    clearProducts: (state) => {
      state.products = []
    }
  }
})

export const { setProducts, setTempProducts, setLoading, setError, clearProducts } = productSlice.actions
export const productReducer = productSlice.reducer