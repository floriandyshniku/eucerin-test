import React from 'react'
import "./product-cart.scss"
function ProductCart(props) {
    
  return (
    <div className='product-cart row'>
        <div onClick={() => props.removeProduct(props.idKey, props.id)}  className="product-cart__close">
            <span className="product-cart__close-bar"></span>
        </div>
        <div className="product-cart__picture-content col-lg-4 col-xs-4">
        <img className='product-cart__image' src={props.image}  alt='/'></img>
        </div>
        <div className="col-lg-8 col-xs-8">
        <div className="product-cart__details-wrapper">
        <p className="product-cart__title">
            Hyaloron Filler Dagcreme
            Hyaloron Filler Dagcreme
        </p>
        <div className="product-cart__price-wrapper">
        <p className='product-cart__price'> Price : {props.price} $</p>
        <p className='product-cart__quantity'> Quantity : {props.idCounts[props.idKey]?.count}</p>
        </div>
        </div>

        </div>
    </div>
  )
}

export default ProductCart