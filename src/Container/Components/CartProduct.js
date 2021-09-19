import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { common } from '@material-ui/core/colors';

class CartProduct extends Component {
    handleClick = () => {
        const { id, removeFromCart } = this.props;
        removeFromCart(id);
    }
    render() {
        const { id, title, prince, image } = this.props;
        console.log("^&^&^&^&^&99999")
        console.log(title);
        return (
            <div className="cart-product">
                <div>
                    <span className="cart-product__name">{title}</span>
                    <img src={image} alt="product" style={{'width' : '60px', 'height' : '60px'}} />
                </div>
                <div className="cart-product__price">{prince}</div>
                <button onClick={this.handleClick}>Remove</button>
            </div>
        );
    }
}

CartProduct.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default CartProduct;