import React, {  useState, useRef, useEffect} from 'react'
import "./dropdown.scss"
import SubNav from '../subnav/SubNav'
import data from '../data/data'
function Dropdown(props) {


  return (
    <nav  className="dropdown">
        <div className="dropdown__wrapper container">
        <ul className="dropdown__list-items">
            {
                data[props.index]?.properties.map((element, key) => {
                    return (
                        <li key={key} onMouseOver={(e) => props.openSubnav(key, e)} onMouseLeave={(e) => props.closeSubnav(key, e)} 
                            className="dropdown__item">{element.name}
                            <SubNav index={key}
                            element={element}  fristIndex={props.index}/>
                        </li>
                    )
                })
            }
        </ul>
        </div>
    </nav>
  )
}

export default Dropdown