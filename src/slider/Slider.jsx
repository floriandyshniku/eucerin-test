import React from 'react'
import "./slider.scss"
import Slideri from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Slider() {
    const settings = {
        dots: false,
        focusOnSelect: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
              ,focusOnSelect: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              focusOnSelect: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              focusOnSelect: false,
            }
          }
        ]
      };
  return (
    <div className='article-slider container'>
    <h2 className='article-slider__title'> Single Item</h2>
    <Slideri {...settings}>
      <div className='article-slider__item'>
      <img className='article-slider__image' alt="/" src="https://images-2.eucerin.com/~/media/eucerin/international/skin-concerns/dry-skin/itchy-skin/eucerin-int-itchy-skin-07-teaser.jpg?rx=0&amp;ry=0&amp;rw=597&amp;rh=400" loading="lazy"></img>
      <div className="article-slider__text-content">
        <span className="article-slider__tittle">hoofhid</span>
        <p className="article-slider__text">Wat helpt bij</p>
        <a href="/" className='article-slider__tag-time'> lestijeed: 5 min</a>
      </div>
      </div>
      <div className='article-slider__item'>
      <img className='article-slider__image' alt='/' src="https://images-2.eucerin.com/~/media/eucerin/international/about-skin/indications/seborrhoeic-dermatitis/eucerin-as-seborrhoeic-dermatitis-02.jpg?rx=0&amp;ry=0&amp;rw=429&amp;rh=288" loading="lazy"></img>
      <div className="article-slider__text-content">
        <span className="article-slider__tittle">hoofhid</span>
        <p className="article-slider__text">Wat helpt bij</p>
        <a href="/" className='article-slider__tag-time'> lestijeed: 5 min</a>
      </div>
      </div>
      <div className='article-slider__item'>
      <img className='article-slider__image' alt="/" src="https://images-2.eucerin.com/~/media/eucerin/international/skin-concerns/dry-skin/itchy-skin/eucerin-int-itchy-skin-07-teaser.jpg?rx=0&amp;ry=0&amp;rw=597&amp;rh=400" loading="lazy"></img>
      <div className="article-slider__text-content">
        <span className="article-slider__tittle">hoofhid</span>
        <p className="article-slider__text">Wat helpt bij</p>
        <a href="/" className='article-slider__tag-time'> lestijeed: 5 min</a>
      </div>
      </div>
      <div className='article-slider__item'>
      <img className='article-slider__image' alt="/" src="https://images-2.eucerin.com/~/media/eucerin/international/skin-concerns/dry-skin/itchy-skin/eucerin-int-itchy-skin-07-teaser.jpg?rx=0&amp;ry=0&amp;rw=597&amp;rh=400" loading="lazy"></img>
      <div className="article-slider__text-content">
        <span className="article-slider__tittle">hoofhid</span>
        <p className="article-slider__text">Wat helpt bij</p>
        <a href="/" className='article-slider__tag-time'> lestijeed: 5 min</a>
      </div>
      </div>
      <div className='article-slider__item'>
      <img className='article-slider__image' alt="/" src="https://images-2.eucerin.com/~/media/eucerin/international/skin-concerns/dry-skin/itchy-skin/eucerin-int-itchy-skin-07-teaser.jpg?rx=0&amp;ry=0&amp;rw=597&amp;rh=400" loading="lazy"></img>
      <div className="article-slider__text-content">
        <span className="article-slider__tittle">hoofhid</span>
        <p className="article-slider__">Wat helpt bij</p>
        <a href="/" className='article-slider__tag-time'> lestijeed: 5 min</a>
      </div>
      </div>
    </Slideri>
  </div>
  )
}

export default Slider