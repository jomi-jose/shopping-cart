import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart } = this.props;
        addToCart(id);
    }

    render() {
        const { title, prince, description, image, isInCart, availableSizes } = this.props;
        console.log(availableSizes);
        return (
            <div>
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{title}</h3>
                    <p> {description} </p>
                    <div className="product__price">{prince}</div>
                    <div>
                      {availableSizes.map(size => (
                            <span> {size}</span>
                        ))}
                    </div>
                    <div className="product__button-wrap">
                        <button onClick={this.handleClick}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;