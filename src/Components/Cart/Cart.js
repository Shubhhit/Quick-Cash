import React, { useState } from 'react';
import './Cart.css';
import $ from "jquery";
import { GiCancel } from 'react-icons/gi';
import Iphone12White from '../../Products/Iphone12White.svg';
import Iphone12Blue from '../../Products/Iphone12Blue.svg';
import { Container } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';

const Cart = () => {

const [counter, setCounter] = useState(0)

const increment = () => {
    setCounter(counter + 1)
}

const decrement = () => {
    setCounter ( counter - 1)
}

  return (
    <div className='cart'>
        <Container className='cart-width'>
        <h1 className='product_h1'>Product</h1>

        <div class="shopping-cart">

        <div class="column-labels">
            <label class="product-removal">Remove</label>
            <label class="product-image">Image</label>
            <label class="product-details">Product</label>
            <label class="product-price">Price</label>
            <label class="product-quantity">Quantity</label>
            <label class="product-line-price">Total</label>
        </div>

        <div class="product">
            <div class="product-removal">
            <button class="remove-product">
                <GiCancel/>
            </button>
            </div>
            <div class="product-image">
            <img src={Iphone12White}/>
            </div>
            <div class="product-details">
            <div class="product-title">Apple iPhone 12 (128GB) - White</div>
            {/* <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p> */}
            </div>
            <div class="product-price">₹50,000</div>
            <div class="product-quantity wrapper">
            <span className='minus' onClick={decrement}>-</span>
            <span className='num'>{counter}</span>
            <span className='plus' onClick={increment}>+</span>
            </div>
            
            <div class="product-line-price">₹50,000</div>
        </div>

        <div class="product">
            <div class="product-removal">
            <button class="remove-product">
                <GiCancel/>
            </button>
            </div>
            <div class="product-image">
            <img src={Iphone12Blue}/>
            </div>
            <div class="product-details">
            <div class="product-title">Apple iPhone 12 (128GB) - Blue</div>
            {/* <p class="product-description">Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p> */}
            </div>
            <div class="product-price">₹50,000</div>
            <div class="product-quantity wrapper">
            <span className='minus' onClick={decrement}>-</span>
            <span className='num'>{counter}</span>
            <span className='plus' onClick={increment}>+</span>
            </div>
            
            <div class="product-line-price">₹50,000</div>
        </div>

        <Row>
            <Col lg={1}></Col>
            <Col lg={7}>
            <input placeholder='Voucher Code' className='vocher-input'></input>
            <button className='redeem'>Redeem</button>
            </Col>
            <Col lg={4}>
            <div class="totals">
            <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value" id="cart-subtotal">₹2,00,000</div>
            </div>
            <div class="totals-item">
            <label>Shipping fee</label>
            <div class="totals-value" id="cart-tax">₹20</div>
            </div>
            <div class="totals-item">
            <label>Coupon</label>
            <div class="totals-value" id="cart-shipping">No</div>
            </div>
            <div class="totals-item totals-item-total">
            <label className='total'>Total</label>
            <div class="totals-value t-price" id="cart-total">₹2,00,000</div>
            </div>
            </div>
            
            <button class="checkout">Checkout</button>
            </Col>
        </Row>
        

        </div>
        </Container>
        
    </div>
  )
}

export default Cart