import React from 'react'
import "./card.scss"
function Card(props) {

  const openProductNav = ()=> {
    document.querySelector(".shop-nav").classList.add("shop-nav--active")
    document.getElementsByTagName("body")[0].classList.add("overlay")
  }

  return (
    <div  className="product-teaser col-lg-3 col-xs-6"  onClick={() => {openProductNav(); props.addProduct(props.image, props.price, props.id, props.index)}}>
        <figure className="product-teaser__picture">
        <img className='product-teaser__img' alt='/' src={props.image} loading="lazy" width="1024" height="1024"></img>
        </figure>
        <div className="product-teaser__body-desciption">
            <a href="/" className="product-teaser__tag-title">Rimples</a>
            <h4 className="product-teaser__title">
                Hyaloron Filler Dagcreme voor de droge huid
            </h4>
            <div className="product-teaser__price-wrapper">
                <span className="product-teaser__ml-price">50ml/ 1l = $719</span>
                <span className="product-teaser__price">$ {props.price}</span>
            </div>
            <button className="product-teaser__button">In wink</button>
        </div>
    </div>
  )
}

export default Card