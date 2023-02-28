import React, { useState } from 'react'
import ProductCart from './ProductCart'
import  "./shopping-slide.scss"

const closeShoppingSlide = ()=> {
    document.querySelector(".shop-nav").classList.remove("shop-nav--active")
}
function ShoppingSlide(props) {
    const removeProduct = (index, id) => {
        const filteredData = props.data.filter((el, i) => i !== index);
        const removedId = props.idCounts.filter((el, i) => el.id !== id)
        props.setIdCounts(removedId);
        props.setData(filteredData);
      }
  return (
    <nav className="shop-nav">
        <header className="shop-nav__header">
            <div onClick={() => closeShoppingSlide()} className="shop-nav__close">
                <span className="shop-nav__close-bar"></span>
            </div>
            <div className="shop-nav__title-wrapper">
                <h2 className="shop-nav__title">Je winkelmand</h2>
                <p className='shop-nav__desc'>
                Goede keuze! 
                Hyaluron-Filler Dagcrème 
                met hyaluronzuur en SPF 30 
                is toegevoegd aan uw winkelwagen</p>
            </div>
        </header>
        <div className="shop-nav__products-wrapper">
            <ul className='shop-nav__products-list'>
            {
                props.data?.map((el, key) => {
                    return (
                        <li className='shop-nav__products-item' key={key}>
                            <ProductCart image={el.image} 
                            price={el.price} idKey={key} 
                            id={el.id}
                            removeProduct={removeProduct}
                            idCounts={props.idCounts}/></li>
                    )
                })
            }
            </ul>
        </div>
        <div className="shop-nav__total-price">
            <div className="shop-nav__subtotal">
            <span className="shop-nav__subtotal-name">subtotal</span>
            </div>
            <div className="shop-nav__subtotal">
            <span className="shop-nav__subtotal-name">subtotal</span>
            </div>
            <div className="shop-nav__subtotal">
            <span className="shop-nav__subtotal-name">subtotal</span>
            </div>
            <div className="shop-nav__subtotal">
            <span className="shop-nav__subtotal-name">subtotal</span>
            </div>
        </div>
        <div className="shop-nav__checkout-pannel">
            <div className="shop-nav__pay-amount">
                <span>xczzxczzx</span>
                <span>xczzxczzx</span>
                <span>xczzxczzx</span>
            </div>
        </div>
    </nav>
  )
}

export default ShoppingSlide