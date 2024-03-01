import { useSelector } from 'react-redux'
import CartItem from "./CartItem.jsx"

function CartPopup() {
    const cart = useSelector((state) => state.products.cart)
    const products = useSelector((state) => state.products.products)
    const cartItems = cart.map(item => {
        const index = products.findIndex(prod => prod.id === item.productID)
        const product = products[index]
        return {
            ...product,
            count: item.count,
            size: item.size,
            totalPrice: (item.count * product.price)
        }
    })
    return (
        <div className="cart-popup">
            {
                cartItems.length > 0 ?
                    cartItems.map(item => <CartItem key={item.id} data={item} />) :
                    "Empty"
            }
        </div>
    );
}

export default CartPopup;
