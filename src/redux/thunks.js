import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsInitial = createAsyncThunk("products/getInitials", async () => {
    const response = await fetch("http://localhost:3000/products")
    const products = await response.json()
    return products
})