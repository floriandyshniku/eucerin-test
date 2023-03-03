import "./styles/general.scss"
import "./styles/grid.scss"
import Header from "./header/Header.jsx";
import Teaser from "./teaser/Teaser";
import Products from "./products/Products";
import Slider from "./slider/Slider";
import NewsLetter from "./newsletter/NewsLetter";
import MobileHeader from "./header/MobileHeader";
function App() {

  return (
    <div className="app">
      <section className="header-content desktop-markup">
      <Header/>
      </section>
      <section className="header-content mobile-markup">
      <MobileHeader/>
      </section>
      <Teaser/>
      <Products/>
      <Teaser/>
      <Products/>
      <section className="slider-container">
      <Slider/>
      </section>
      <NewsLetter/>
    </div>
  );
}

export default App;
