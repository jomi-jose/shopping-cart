import Product from "./Product"
import PropTypes from 'prop-types';
import './ProductList.css';
import { grey } from "@material-ui/core/colors";


export default function ProductList({products, addToCart}) {
    return(
        <div style={{ 'backgroundColor': '#DCDCDC'}}>
            <h3> Products</h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} addToCart={addToCart} />
                  </li>
              ))}
            </ul>
        </div>
    )
}
ProductList.propTypes = {
    products: PropTypes.array,
}