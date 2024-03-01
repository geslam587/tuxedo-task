import { useDispatch } from "react-redux"
import { setActive } from "../redux/products/productsSlice.js"

function ProductCard({data}) {
    const dispatch = useDispatch()
    const viewProduct = () => {
        dispatch(setActive(data.id))
    }
    // let heart = "heart"
    // let heartF = "heart-outline"
    function makeF (e){

        e.target.name=='heart'? e.target.name="heart-outline": e.target.name="heart"  }
        
    return (
        <div className="product-card">
                <div class="heart">
                    <ion-icon name='heart-outline' onClick={makeF}  ></ion-icon>
                </div>
            <img src={data.image} alt="" />
            <button onClick={viewProduct}>QUICK VIEW</button>
            <h3>{data.name}</h3>
            <p>${data.price}</p>
        </div>
    );
}

export default ProductCard;
