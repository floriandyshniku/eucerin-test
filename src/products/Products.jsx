import React, { useEffect, useRef, useState } from "react";
import "./products.scss";
import Card from "./Card";
import ShoppingSlide from "../shoping-slide/ShoppingSlide.jsx";
import product from "../data/product-data";

function Products() {
  const [elements, setElements] = useState([]);
  const [idCounts, setIdCounts] = useState([]);
  console.log(elements);
  const totalPrice = idCounts
    .map((el) => {
      return el.price * el.count;
    })
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalPriceElement = document.querySelector(".shop-nav__amount-to-pay");
  if (totalPriceElement !== null) {
    totalPriceElement.textContent = "Total Price: " + totalPrice + "$";
  }
  
  function addProduct(image, price, id, index) {
    if (elements.some((element) => element.id === id)) {
      // nese element eziston rrit count per ate Item
      setIdCounts((prevIdCounts) =>
        prevIdCounts.map((idCount) =>
          idCount.id === id
            ? { id: id, count: idCount.count + 1, price: price }
            : idCount
        )
      );
      return;
    }
    // nese nuk ekziston shto ne array me count 1
    setElements((prevElements) => [
      ...prevElements,
      { id: id, image: image, price: price },
    ]);
    setIdCounts((prevIdCounts) => [
      ...prevIdCounts,
      { id: id, count: 1, price: price },
    ]);
  }

  const shopNavRef = useRef(null);
  useEffect(()=>{
    document.addEventListener("click", (e) => {
        const target = e.target
        if (!target.closest(".shop-nav") && !target.closest(".product-teaser")
            && !target.closest(".product-cart__close")) {
            shopNavRef.current?.classList.remove("shop-nav--active")
            document.getElementsByTagName("body")[0].classList.remove("overlay")
        }
    });
  })               

  return (
    <div className="products-overview">
      <ShoppingSlide
        data={elements}
        setData={setElements}
        idCounts={idCounts}
        setIdCounts={setIdCounts}
        shopNavRef={shopNavRef}
      />
      <div className="container">
        <div className="row">
          {product.map((el, key) => {
            return (
              <Card
                id={el.id}
                image={el.image}
                price={el.price}
                index={key}
                addProduct={addProduct}
                counter={el.counter}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
