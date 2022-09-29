import './CartWidget.css';
import CartIcon from './assets/cartIcon.svg';

const CartWidget = () => {
    return (
        <div>
            <img className="cartIcon" src={CartIcon} alt="carrito" />
            <span>0</span>
        </div>
    );
};

export default CartWidget;