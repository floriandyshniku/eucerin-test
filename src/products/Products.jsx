import React, { useState } from "react";
import "./products.scss";
import Card from "./Card";
import ShoppingSlide from "../shoping-slide/ShoppingSlide.jsx";
import product from "../data/product-data";

function Products() {
  const [elements, setElements] = useState([]);
  const [idCounts, setIdCounts] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [isRemove, setRemove] = useState(false);



  function addProduct(image, price, id) {
    if (elements.some((element) => element.id === id)) {
      // nese element eziston rrit count per ate Item
      setIdCounts((prevIdCounts) =>
        prevIdCounts.map((idCount) =>
          idCount.id === id ? { id: id, count: idCount.count + 1 } : idCount
        )
      );
      return;
    }
    // nese nuk ekziston shto ne array me count 1
    setElements((prevElements) => [
      ...prevElements,
      { id: id, image: image, price: price },
    ]);
    setIdCounts((prevIdCounts) => [...prevIdCounts, { id: id, count: 1 }]);
  }


  return (
    <div className="products-overview">
      <ShoppingSlide data={elements} setData={setElements} idCounts={idCounts} setIdCounts={setIdCounts}/>
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
