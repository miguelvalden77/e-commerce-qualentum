import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json"

const initialState = {
    products: [],
    theme: "light",
    user: {
        username: "",
        email: "",
        logged: false
    },
    visibleProducts: data
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

            localStorage.setItem("cart", JSON.stringify(state.products))
        },
        removeAllProducts: (state, action) => {
            state.products = []
        },
        changeTheme: (state, action) => {
            if (state.theme == "light") {
                state.theme = "dark"
            } else {
                state.theme = "light"
            }
        },
        addUser: (state, action) => {
            const { username, email } = action.payload
            state.user = { username, email, logged: true }
        },
        removeUser: (state, action) => {
            state.user = { username: "", email: "", logged: false }
        },
        updateVisible: (state, action) => {
            state.visibleProducts = data.filter((product) => product.title.includes(action.payload))
            console.log(action.payload)
            console.log(state.visibleProducts)
        }
    }
})

export const { addProduct, changeTheme, addUser, removeUser, removeAllProducts, updateVisible } = productSlice.actions
export default productSlice.reducer