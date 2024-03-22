import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    theme: "light"
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id == action.payload.id)
            if (index !== -1) {
                state.products[index].count += 1
            } else {
                state.products.push({ ...action.payload, count: 1 })
            }
        },
        changeTheme: (state, action) => {
            if (state.theme == "light") {
                state.theme = "dark"
            } else {
                state.theme = "light"
            }
        }
    }
})

export const { addProduct, changeTheme } = productSlice.actions
export default productSlice.reducer