import React, { useEffect, useRef, useState } from "react";
import ProductCart from "./ProductCart";
import "./shopping-slide.scss";

const closeShoppingSlide = (e) => {
  e.target.closest(".shop-nav").classList.remove("shop-nav--active");
  document.getElementsByTagName("body")[0].classList.remove("overlay")
  console.log("u mbyll");
};

function ShoppingSlide(props) {

  const removeProduct = (index, id) => {
    const filteredData = props.data.filter((el, i) => i !== index);
    const removedId = props.idCounts.filter((el, i) => el.id !== id);
    props.setIdCounts(removedId);
    props.setData(filteredData);
  };


 

  return (
    <nav className="shop-nav" ref={props.shopNavRef}>
      <div className="shop-nav__cart-wrapper">
        <div className="shop-nav__product-wrapper">
          <div
            onClick={(e) => closeShoppingSlide(e)}
            className="shop-nav__close"
          >
            <span className="shop-nav__close-bar"></span>
          </div>
          <div className="shop-nav__title-wrapper">
            <h2 className="shop-nav__title">Je winkelmand</h2>
            <p className="shop-nav__desc">
              Goede keuze! Hyaluron-Filler Dagcrème met hyaluronzuur en SPF 30
              is toegevoegd aan uw winkelwagen
            </p>
          </div>
          <ul className="shop-nav__products-list">
            {props.data?.map((el, key) => {
              return (
                <li className="shop-nav__products-item" key={key}>
                  <ProductCart
                    image={el.image}
                    price={el.price}
                    idKey={key}
                    id={el.id}
                    removeProduct={removeProduct}
                    idCounts={props.idCounts}
                  />
                </li>
              );
            })}
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
      </div>
      <div className="shop-nav__checkout-pannel">
        <div className="shop-nav__pay-content">
          <span className="shop-nav__amount-to-pay">Total price:</span>
        </div>
      </div>
    </nav>
  );
}

export default ShoppingSlide;
