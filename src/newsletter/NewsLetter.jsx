import React from 'react'
import "./newsletter.scss"
function NewsLetter() {
  return (
    <article className="newsletter container">
    <div className="row center"> 
    <div className="newsletter__teaser">
        <figure className="newsletter__img-content">
            <img className="newsletter__image" src="https://images-2.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin%20relaunch%20media/eucerin/international/newsletter/newsletter-teaser.webp" alt="Nieuwsbrief" loading="lazy"></img>
        </figure>
        <figcaption className="newsletter__text-content">
            <h2 className="newsletter__tittle">Ontvang</h2>
            <ul className="newsletter__list">
                <li className="newsletter__list-item">
                    Door deze inhoud in te schakelen, kunnen uw persoonlijke
                </li>
                <li className="newsletter__list-item">
                    Door deze inhoud in te schakelen, kunnen uw persoonlijke
                </li>
                <li className="newsletter__list-item">
                    Door deze inhoud in te schakelen, kunnen uw persoonlijke
                </li>
            </ul>
            <button className="newsletter__button button">Inschrijven</button>
        </figcaption>
    </div>
    </div>
    </article>
  )
}

export default NewsLetter