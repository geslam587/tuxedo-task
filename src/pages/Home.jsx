import CartPopup from "../components/CartPopup";
import NavBar from "../components/NavBar"
import ProductPopup from "../components/ProductPopup";
import ProductsSection from "../components/ProductsSection";

function Home() {
    return (
        <div className="home-page">
            <NavBar />
            <div className="section1">Section 1</div>
            <ProductsSection />
            <div className="section3">Section 3</div>
            <ProductPopup />
           
        </div>
    );
}

export default Home;
