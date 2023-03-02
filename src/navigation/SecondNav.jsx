import React from 'react'
import "./second-nav.scss"

function SecondNav(props) {
    const closeSubNav = (e)=> {
        e.stopPropagation()
        let target = e.target
        console.log(e.target);
        target.closest(".second-nav").classList.remove("second-nav--active");
    }
  return (
    <div className="second-nav">
        <div className="second-nav__prev-btn" onClick={(e) => closeSubNav(e)} >
            <span className="second-nav__bar" ></span>
        </div>
        <ul className="second-nav__list-item">
            <h3 className='second-nav__title'>{props.property.name}</h3>
            {
                props.activeProperty?.properties.map((el, key) => {
                    return (
                        <li key={key} className="second-nav__item">{el}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default SecondNav