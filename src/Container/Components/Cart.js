import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';
import './Cart.css';
import { common } from '@material-ui/core/colors';


const Cart = ({ items, total, removeFromCart }) => {
    console.log("ghghghgkjkjkj");
    console.log(items);
    return (
        <div style={{ 'backgroundColor': '#FFFAF0', 'width' : '50%', 'min-height': '10rem'}}>
            <h3>Shopping Cart...</h3>

            <div className="cart">
                <div>
                    <div>
                        {items.length > 0 ? (
                            <div className="cart__content">
                                {items.map(item => (
                                    <CartProduct key={item.id} {...item} removeFromCart={removeFromCart} />
                                ))}
                            </div>
                        ) : ''}
                        {items.length === 0 ? (
                            <span>Cart is empty</span>
                        ) : ''}
                        <div className="cart__total">Total: {total} </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    // removeFromCart: PropTypes.func.isRequired
}

export default Cart;