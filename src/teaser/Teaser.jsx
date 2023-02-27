import React from "react";
import "./teaser.scss";
function Teaser() {
  return (
    <div className="con">
      <picture className="img-content">
        <img
          alt="/"
          className="img-content__img desktop-markup"
          src="https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/nl/banner%20elasticity%20-%20motown%20relaunch%20v2/hf%20%20elasticity%20relaunch%20incl%20golden%20border/moistureboosternight_pre-launch%20desktop.webp?rx=0&ry=1&rw=12000&rh=2639&mw=2000&hash=1903D7424595D94FB763AA0A6FB46C87 1x, https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/nl/banner%20elasticity%20-%20motown%20relaunch%20v2/hf%20%20elasticity%20relaunch%20incl%20golden%20border/moistureboosternight_pre-launch%20desktop.webp?rx=0&ry=1&rw=12000&rh=2639&mw=4000&hash=366DD8661EDFE455439C36CAFF6E0A6C 2x, https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/nl/banner%20elasticity%20-%20motown%20relaunch%20v2/hf%20%20elasticity%20relaunch%20incl%20golden%20border/moistureboosternight_pre-launch%20desktop.webp?rx=0&ry=1&rw=12000&rh=2639&mw=6000&hash=C0499E3A4B089BA52E474A79CEDE4ECE 3x"
        ></img>

        <img
          alt="/"
          className="img-content__img mobile-markup"
          src="https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/nl/banner%20elasticity%20-%20motown%20relaunch%20v2/hf%20%20elasticity%20relaunch%20incl%20golden%20border/moistureboosternight_pre-launch%20desktop.jpg?rx=995&ry=0&rw=11004&rh=2641"></img>
      </picture>
      <div className="teaser container">
        <div className="teaser__content">
          <h2 className="teaser__title">Hyaluron-Filler hydrataite </h2>
          <span className="teaser__text"> Nu gratis gez</span>
          <button className="teaser__button button">Shop nu</button>
        </div>
      </div>
    </div>
  );
}

export default Teaser;
