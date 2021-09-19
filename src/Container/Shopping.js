import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Product from './Components/Product';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/core/icons-material/ExpandMore';
import products from '../data/products';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { grey } from '@material-ui/core/colors';


export default class Shopping extends React.Component {
    constructor(){
        super();
        this.state = {
            products : products,
            items : [],
            total: 0,
        }
        console.log(this.state.products);
    }
    addToCart = (id) => {
        const currentItem = products.find(p => p.id === id);
        if(!this.state.items.find(p => p.id === id)){
            const cartItems = this.state.items.concat(currentItem)
            console.log(this.state.items);
            debugger;
            this.setState({
                total : this.state.total + currentItem.prince,
                items: cartItems
            });
        }
        else{
            alert("Available in the Cart")
        }
    }

    removeFromCart = (id) => {
        const currentItem = this.state.items.find(p => p.id === id);
        debugger;
        const newCart = this.state.items.filter(i => i.id !== id);
        console.log(this.state.items);
        
        this.setState({
            total : this.state.total - currentItem.prince,
            items: newCart
        });
    }

    render (){
        return(
            <div>
        <Accordion>
            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography fontWeight={'700'}>Shopping</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: grey}}>
                <ProductList  products ={this.state.products} addToCart = {(id) => this.addToCart(id)}/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography fontWeight={'700'}>Cart</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Cart items={this.state.items} total={this.state.total} removeFromCart = {(id) => this.removeFromCart(id)}/>
            </AccordionDetails>
        </Accordion>
        </div>
        )
    }
        
}