import React, { useRef, useState, useEffect } from "react";
import "./header.scss";
import flag from "../images/flag.png"
import Dropdown from "../dropdown/Dropdown";
import data from "../data/data";
import { HeaderContext } from "../context/HeaderContext";

function Header() {
  const [length, setLength] = useState(null)
    const openNav = (length, index)=> {
     const div =  document.querySelectorAll(".dropdown")[index]
     div.classList.add("dropdown--open")
     div.style.height = length * 50 +"px"
     setLength(length)
    }

    useEffect((e) => {
      document.addEventListener("onMouseOver",() => {

      })
    }, [])
   
    const openSubnav = (index, e)=> {
      const dropdown =  document.querySelector(".dropdown--open")
      const subnav = dropdown.querySelectorAll(".subnav")[index]
      subnav.classList.add("subnav--active")
      // subnav.style.height = subnav.querySelector(".subnav__list-items").offsetHeight + "px"
      const dropdownListItem = dropdown.querySelector(".dropdown__list-items")
        
        if ((dropdown?.offsetHeight <= subnav?.offsetHeight )) {
          dropdown.style.height = subnav.offsetHeight + "px"
        }
        else if ( dropdown?.offsetHeight >= subnav?.offsetHeight){
          dropdown.style.height = dropdownListItem.offsetHeight + "px"
        }
    }
    const closeSubnav = (index, e)=> {
      console.log('close-subnave', e.target);
      const dropdown =  document.querySelectorAll(".dropdown--open")[0]
      const subnav = dropdown.querySelectorAll(".subnav")[index]
      subnav.classList.remove("subnav--active")
      dropdown.style.height = length * 50 +"px"
    }

    const closeNav = (height, index, e)=> {

      console.log('close-nave');
      const div =  document.querySelectorAll(".dropdown")[index]
      div.style.height = 0 + "px"
      div.classList.remove("dropdown--open")
    }
  

  return (
    <header className="header row container">
      <div className="header__logo-img col-lg-2">
        <svg
          className="header__logo"
          xmlns="http://www.w3.org/2000/svg"
          width="99"
          height="40"
          viewBox="0 0 99 40"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#A70532"
              d="M3.843 29.123L47.579 39.668 91.315 29.123z"
            ></path>
            <path
              fill="#223341"
              d="M51.474 6.43c3.958 0 6.484 2.645 6.484 7.3 0 .403 0 .57-.03 1.206h-9.221c0 3.822 1.606 6.229 4.52 6.229 1.24 0 2.434-.402 3.794-1.507l-.303 2.177c-1.722 1.138-3.068 1.507-4.82 1.507-4.625 0-7.604-3.215-7.604-8.64 0-5.09 2.918-8.272 7.18-8.272zm-13.037.067c1.405 0 3.092.273 4.513 1.235l-.665 2.02c-.725-.674-1.593-1.566-3.435-1.486-2.19.097-3.584 2.45-3.584 6.603 0 4.118 1.584 6.262 4.29 6.262 1.127 0 1.961-.162 3.14-1.024l-.424 2.11c-1.36.904-2.49 1.057-4.107 1.057-4.415 0-7.461-3.18-7.461-8.103 0-5.225 3.13-8.674 7.733-8.674zm-19.963.368v10.243c0 2.004.768 3.32 2.526 3.32 1.818 0 2.647-1.603 2.647-4.421V6.865h4.02v16.042h-4.02V20.46c-.897 1.522-2.349 2.746-4.46 2.746-2.501 0-4.733-1.12-4.733-5.654V6.865h4.02zM11.727 0v2.244H4.745v7.501h5.972v2.244H4.745v8.673h7.187v2.245H0V0h11.727zm57.625 6.53c.213 0 .365 0 .697.034l-.182 4.856c-.725-.417-1.209-.502-1.784-.502-1.722 0-3.112 1.54-3.112 3.415v8.574h-4.02V6.866h4.02v4.052c1.239-3.115 2.508-4.388 4.381-4.388zm20.188-.033c1.922 0 4.551.929 4.551 5.339v11.07h-4.02V13.16c0-2.984-1.18-3.816-2.405-3.816-.936 0-2.556.396-2.556 4.763v8.8h-4.019V6.867h4.02v2.41c1.09-1.785 2.707-2.78 4.43-2.78zm-12.628.368v16.042H72.68V6.865h4.23zM51.504 7.871c-1.777 0-2.688 2.235-2.797 5.372h5.2c-.061-3.224-.835-5.372-2.403-5.372zM95.756 0c1.305 0 2.398 1.028 2.398 2.378 0 1.374-1.093 2.404-2.398 2.404-1.31 0-2.41-1.03-2.41-2.404 0-1.35 1.1-2.379 2.41-2.379zm0 .35c-1.119 0-1.976.883-1.976 2.028 0 1.17.857 2.052 1.976 2.052 1.107 0 1.965-.882 1.965-2.052 0-1.145-.858-2.028-1.965-2.028zM76.879.001v4.165h-4.166V0h4.166zm19.025.99c.664 0 .978.262.978.799 0 .506-.32.717-.736.761l.8 1.234h-.467l-.76-1.201h-.461v1.201h-.435V.992zm-.071.352h-.575v.889h.542c.347-.006.648-.053.648-.46 0-.372-.32-.43-.615-.43z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="header__nav-content col-lg-6">
          <ul className="header__list-items">
            {
              data.map((category, key) => {
                    return (
                        <li key={key} className="header__item" onMouseEnter={() => {openNav(category.properties.length, key)}} onMouseLeave={(e) => {closeNav(category.properties.length, key, e)}}>
                        <a className="header__meta-link" href="/"  >
                            {category.name}
                        </a>
                            <HeaderContext.Provider value={{/*subnavRef, dropdownRef, activeThirdNav,
                                                            setActiveThirdNav, selectedProperty, setSelectedProperty*/}}>
                            <Dropdown category={category}  index={key} openSubnav={openSubnav} closeSubnav={closeSubnav}/>
                            </HeaderContext.Provider>
                        </li>
                    )
                })
            }
          </ul>
      </div>
      <div className="header__branding-wrapper col-lg-4  ">
        <a href="/" className="header__portal-link">
          Academy
        </a>
        <div className="header__login-logo">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M16 2.909c7.23 0 13.091 5.861 13.091 13.091s-5.861 13.091-13.091 13.091c-7.23 0-13.091-5.861-13.091-13.091s5.861-13.091 13.091-13.091zM18.181 21.818h-3.631c-1.576 0-3.036 0.704-4.013 1.933-0.468 0.589-0.79 1.252-0.954 1.958 1.841 1.218 4.046 1.927 6.417 1.927 2.639 0 5.073-0.879 7.025-2.359-0.355-1.074-1.075-2.004-2.058-2.639-0.767-0.495-1.647-0.775-2.558-0.815l-0.228-0.005zM16 4.364c-6.427 0-11.636 5.21-11.636 11.636 0 3.495 1.54 6.629 3.979 8.762 0.235-0.686 0.59-1.332 1.055-1.917 1.207-1.518 2.994-2.414 4.928-2.478l0.224-0.004h3.631c1.271 0 2.509 0.364 3.575 1.053 1.090 0.703 1.932 1.694 2.437 2.846 2.126-2.108 3.443-5.032 3.443-8.263 0-6.427-5.21-11.636-11.636-11.636zM16 7.273c3.209 0 5.818 2.609 5.818 5.818s-2.609 5.818-5.818 5.818c-3.208 0-5.818-2.61-5.818-5.818 0-3.209 2.609-5.818 5.818-5.818zM16 8.727c-2.406 0-4.364 1.958-4.364 4.364s1.959 4.364 4.364 4.364c2.406 0 4.364-1.958 4.364-4.364s-1.958-4.364-4.364-4.364z"></path>
          </svg>
        </div>
        <div className="header__shop-logo">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="30"
            viewBox="0 0 32 32"
          >
            <path d="M16 2.182c3.213 0 5.818 2.605 5.818 5.818v1.455h2.909l2.182 19.636h-21.818l2.182-19.636h2.909v-1.455c0-3.213 2.605-5.818 5.818-5.818zM23.425 10.909h-14.852l-1.858 16.727h18.568l-1.858-16.727zM16 3.636c-2.355 0-4.275 1.866-4.361 4.2l-0.003 0.164v1.455h8.727v-1.455c0-2.41-1.953-4.364-4.364-4.364z"></path>
          </svg>
        </div>
        <div className="header__lang-selector">
          <span className="header__flag-item">
            <img src={flag} alt="" className="header__flag-img" />
          </span>
          <span className="header__lang-initials">NL</span>
          
        </div>
        <div className="header__search-item">
            <svg
              className="header__search-logo"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="30"
              viewBox="0 0 32 32"
            >
              <path d="M13.455 2.182c6.226 0 11.273 5.047 11.273 11.273 0 2.851-1.058 5.454-2.803 7.439l7.483 7.485-1.029 1.029-7.485-7.483c-1.985 1.745-4.588 2.803-7.439 2.803-6.226 0-11.273-5.047-11.273-11.273s5.047-11.273 11.273-11.273zM13.455 3.636c-5.422 0-9.818 4.396-9.818 9.818s4.396 9.818 9.818 9.818c5.422 0 9.818-4.396 9.818-9.818s-4.396-9.818-9.818-9.818z"></path>
            </svg>
          </div>
      </div>
    </header>
  );
}

export default Header;
