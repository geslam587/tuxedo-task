import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeProduct: null,
    products: [
        {
            
            "id": 1, "image": "/media/DSC05336-scaled.jpg",
            "name": "TUXEDO SUIT-BLACK-SHAWL LAPEL", "price": 4000,
            'detels':['BLACK TUXEDO SUIT', 'SHAWL LAPEL WIDTH = 9 CM', 'BUTTONED, ZIPPED BLACK TROUSER', 'SINGLE BREASTD BLAZER WITH ONE BUTTON', 'WELT BREAST POCKET WITH TWO BESOM POCKETS', '100% PURE WOOL', 'ITALIAN WOOL'],
        },
        {
            "id": 2, "image": "/media/DSC05308-scaled.jpg",
            "name": "TUXEDO SUIT-BLACK-SHAWL LAPEL", "price": 3000,
            'detels':['BLACK TUXEDO SUIT', 'SHAWL LAPEL WIDTH = 9 CM', 'BUTTONED, ZIPPED BLACK TROUSER', 'SINGLE BREASTD BLAZER WITH ONE BUTTON', 'WELT BREAST POCKET WITH TWO BESOM POCKETS', '100% PURE WOOL', 'ITALIAN WOOL'],
        },
        {
            "id": 3, "image": "/media/DSC05299-scaled.jpg",
            "name": "TUXEDO SUIT-BLACK-SHAWL LAPEL", "price": 5000,
            'detels':['BLACK TUXEDO SUIT', 'PEAK LAPEL WIDTH = 9 CM', 'BUTTONED, ZIPPED BLACK TROUSER', 'SINGLE BREASTD BLAZER WITH ONE BUTTON', 'WELT BREAST POCKET WITH TWO BESOM POCKETS', '100% PURE WOOL', 'ITALIAN WOOL'],
        },
        {
            "id": 4, "image": "/media/34-768x1152-1-300x450.jpg",
            "name": "TUXEDO SUIT-WHITE-SHAWL LAPEL", "price": 2000,
            'detels':['OFF WHITE TUXEDO SUIT', 'PEAK LAPEL WIDTH = 9 CM', 'SINGLE BREASTD BLAZER WITH ONE BUTTON', 'WELT BREAST POCKET WITH TWO BESOM POCKETS', '100% PURE WOOL','100% PURE WOOL','ITALIAN WOOL'],
        },
    ],
    cart: [
        // {productID: 1, count: 5, size: 46}
    ]
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActive: (state, action) => {
        state.activeProduct = action.payload
    },
    clearActive: (state) => {
        state.activeProduct = null
    },
    addToCart: (state, action) => {
        if(state.cart.findIndex(item => item.productID === action.payload.productID) !== -1) {
            const index = state.cart.findIndex(item => item.productID === action.payload.productID)
            state.cart[index].count += action.payload.count
        }
        else {
            state.cart.push(action.payload)
        }
    },
    removeFromCart: (state, action) => {
        const index = state.cart.findIndex(item => item.productID === action.payload)
        state.cart.splice(index, 1)
    },
  },
})
export const { setActive, clearActive, addToCart, removeFromCart } = productsSlice.actions
export default productsSlice.reducer