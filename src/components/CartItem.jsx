import { removeFromCart } from "../redux/products/productsSlice.js"
import { useDispatch } from 'react-redux'

function CartItem({data}) {
    const dispatch = useDispatch()
    const cartRemove = () => {
        dispatch(removeFromCart(data.id))
    }
    return (
        <div className="cart-item">
            <ion-icon name="close-outline" onClick={cartRemove} ></ion-icon>
            {/* <button onClick={cartRemove}>Remove</button> */}
            <img src={data.image} alt="" />
            <div>
                <p>{data.name}</p>
                <p>price: {data.price} * {data.totalPrice/data.price} item </p>
                <p>TotalPrice: {data.totalPrice}</p>
            </div>
        </div>
    );
}

export default CartItem;
