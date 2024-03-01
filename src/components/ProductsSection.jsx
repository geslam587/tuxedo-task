import ProductCard from "./ProductCard"
import { useSelector } from 'react-redux'

function ProductsSection() {
    const cards = useSelector((state) => state.products.products)
    return (
        <div className="products-section">
            {
                cards.map(product => {
                    return <ProductCard key={product.id} data={product} />
                })
            }
        </div>
    );
}

export default ProductsSection;
