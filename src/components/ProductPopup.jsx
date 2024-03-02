import { useSelector, useDispatch } from 'react-redux'
import { clearActive, addToCart } from "../redux/products/productsSlice.js"
import { useEffect, useState } from 'react'

function ProductPopup() {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const [size, setSize] = useState(null)
    const activeProduct = useSelector((state) => state.products.activeProduct)
    const products = useSelector((state) => state.products.products)
    const product = activeProduct ? products.filter(product => +product.id === +activeProduct)[0] : null
    const clearActiveProduct = () => {
        dispatch(clearActive())
        setCount(0)
        setSize(null)
    }
    const closeActiveProduct = (e) => {
        if (e.target.classList.contains("active")) {
            dispatch(clearActive())
            setCount(0)
            setSize(null)
        }
    }
    const cartAdd = () => {
        dispatch(addToCart({productID: product.id, count: +count, size: +size }))
        dispatch(clearActive())
        setCount(0)
        setSize(null)
    }
    useEffect(() => {
        window.addEventListener("keyup", (e) => {
            if(e.key === "Escape") {
                dispatch(clearActive())
            }
        })
    }, [])
    return (
        <div className={`product-popup ${product ? "active" : ""}`}onClick={closeActiveProduct}  >
            <div className="content">
                <ion-icon name="close-outline" onClick={clearActiveProduct}></ion-icon>
                <img src={product?.image} alt="" />
                <div>
                    <h2>{product?.name}</h2>
                    <p>${product?.price}</p>
                    <ul>
                        {product?.detels.map((d)=> <li> {d}</li>)}
                    </ul>
                    <div className="choose">
                        <span>choose size</span>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => {setSize(e.target.value)}}
                        >
                            <option selected={size == null} defaultValue value="">choose an option</option>
                            <option value="46">46</option>
                            <option value="48">48</option>
                            <option value="50">50</option>
                            <option value="52">52</option>
                            <option value="54">54</option>
                            <option value="56">56</option>
                            <option value="58">58</option>
                            <option value="60">60</option>
                            <option value="62">62</option>
                        </select> 
                    </div>
                    <input type="number" value={count} onChange={(e) => {setCount(e.target.value)}} min={0} />
                    <button
                        className={size && +count ? "active-button" : ""}
                        onClick={()=>{return size && +count ? cartAdd() : ""}}
                    >
                            {"Add to cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductPopup;
