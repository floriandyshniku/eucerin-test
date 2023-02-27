import React, { useState } from "react";
import "./products.scss";
import Card from "./Card";
import ShoppingSlide from "../shoping-slide/ShoppingSlide.jsx";
import product from "../data/product-data";

function Products() {
  const [elements, setElements] = useState([]);
  const [idCounts, setIdCounts] = useState({})
  const [idCounter, setCounterId] = useState(0)
  function addProduct(image, price, id) {
    if (elements.some((element) => element.id === id)) {
      return;
    }
    setElements((prevElements) => [...prevElements,{ id: id, image: image, price: price }]);
    setCounterId()
  }
  return (
    <div className="products-overview">
      <ShoppingSlide data={elements} setData={setElements} />
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
