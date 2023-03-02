import React, { useState } from "react";
import "./navigation.scss";
import data from "../data/data";
import SecondNav from "./SecondNav";
function Navigation() {
  const [activeProperty, setActiveProperty] = useState(null);

  const closeNavigation = () => {
    document
      .querySelector(".navigation")
      .classList.remove("navigation--active");
  };

  const openSecondNav = (property, index, e) => {
    const target = e.target
    if (target.querySelector(".second-nav") !== null) {
      target.querySelector(".second-nav").classList.add("second-nav--active");
    }
    setActiveProperty(property);
  };

  return (
    <div className="navigation">
      <div className="navigation__close" onClick={() => closeNavigation()}>
        <span className="navigation__close-bar"></span>
      </div>
      <ul className="navigation__list-items">
        {data.map((el, key) => {
          return (
            <li key={key} className="navigation__item">
              <span className="navigation__item-content">{el.name}</span>
              <ul className="navigation__sub-list">
                {el.properties.map((property, key) => {
                  return (
                    <li onClick={(e) => openSecondNav(property, key, e)} key={key} className="navigation__sub-list-item">
                      {property.name}
                      <SecondNav  activeProperty={activeProperty} property={property} index={key}/>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
