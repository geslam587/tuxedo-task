import CartPopup from "./CartPopup";

function NavBar() {
    return (
        <div className="nav-bar">
            <ion-icon name="cart-outline"> </ion-icon>
                <CartPopup />
        </div>
    );
}

export default NavBar;
