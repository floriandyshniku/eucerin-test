import React from 'react'
import "./product-cart.scss"
function ProductCart(props) {
    
  return (
    <div className='product-cart row'>
        <div onClick={() => props.removeProduct(props.id)}  className="product-cart__close">
            <span className="product-cart__close-bar"></span>
        </div>
        <div className="product-cart__picture-content col-lg-4">
        <img className='product-cart__image' src={props.image}  alt='/'></img>
        </div>
        <div className="col-lg-8">
        <div className="product-cart__details-wrapper">
        <p className="product-cart__title">
            Hyaloron Filler Dagcreme
            Hyaloron Filler Dagcreme
            </p>
        <p className='product-cart__price'> Price : {props.price}
        </p>
        </div>

        </div>
    </div>
  )
}

export default ProductCart