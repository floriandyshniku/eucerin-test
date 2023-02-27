import React from 'react'
import "./subnav.scss"
import data from '../data/data'
function SubNav(props) {

  return (
    <nav className="subnav" >
     
        <ul className="subnav__list-items">
            {
                data[props.fristIndex]?.properties[props.index]?.properties.map((el, key) => {
                    return (
                        <li key={key} className="subnav__item">{el}</li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default SubNav