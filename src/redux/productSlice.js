import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    theme: "light",
    user: {
        username: "",
        email: "",
        logged: false,
        rol: ""
    },
    search: ""
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
            const rol = email.includes("@admin") ? "admin" : "user"
            console.log(rol)
            state.user = { username, email, logged: true, rol }
        },
        removeUser: (state, action) => {
            state.user = { username: "", email: "", logged: false }
        },
        updateSearch: (state, action) => {
            // state.visibleProducts = state.products.filter((product) => product.title.includes(action.payload))
            state.search = action.payload
        },
        getProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { addProduct, changeTheme, addUser, removeUser, removeAllProducts, updateSearch, getProducts } = productSlice.actions
export default productSlice.reducer