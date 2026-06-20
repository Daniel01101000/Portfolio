import './Cards.css'
import TechStack from "./TechStack/TechStack.jsx";
import { useLanguage } from '../../hooks/useLanguage.js';

import apiMoviesImg from "../../assets/Imgs_Projects/ApiMovies.png";
import ShopSmart from "../../assets/Imgs_Projects/ShopSmart.png";
import ApiPokemon from "../../assets/Imgs_Projects/ApiPokemon.png";
import ApiRick from "../../assets/Imgs_Projects/Apirick.png";
import Quizzes from "../../assets/Imgs_Projects/Quizzes.png";
import Lootly from "../../assets/Imgs_Projects/Lootly.png";

function Cards() {
  const { t } = useLanguage();

  return (
    <div className="cards-container">

      <div className="card">
        <a href="https://daniel01101000.github.io/API-IMDB/" target="_blank" rel="noopener noreferrer">
          <img src={apiMoviesImg} alt="ApiMovies" />
        </a>
        <div className="card-content">
          <h3>ApiMovies</h3>
          <p>{t("Fullstack App (Browse Movie Data from an API)")}</p>
          <TechStack technologies={["React","JavaScript","HTML","CSS","Node","Git"]}/>
        </div>
      </div>

      <div className="card">
        <a href="https://daniel01101000.github.io/ShopSmart/" target="_blank" rel="noopener noreferrer">
          <img src={ShopSmart} alt="ShopSmart" />
        </a>
        <div className="card-content">
          <h3>ShopSmart</h3>
          <p>{t("Fullstack App (E-commerce Platform)")}</p>
          <p className="demo-link">
            <strong>{t("Live Demo Video:")}</strong>{" "}
            
                <a 
                  href="https://www.loom.com/share/58bd319f7e054e1997c19a6f87c0bc6c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    loom.com/share/58bd319f7e05...
                </a>

                <span className="demo-note">
                    {" "} {t("(Without waiting)")}
                </span>
            </p>
          <TechStack technologies={["React","JavaScript","HTML","CSS","Node","SQL","Git"]}/>
        </div>
      </div>

      <div className="card">
        <a href="https://daniel01101000.github.io/Pokemon-Api/" target="_blank" rel="noopener noreferrer">
          <img src={ApiPokemon} alt="ApiPokemon" />
        </a>
        <div className="card-content">
          <h3>ApiPokemon</h3>
          <p>{t("Fullstack App (View Pokémon from the First Generation)")}</p>
          <TechStack technologies={["React","JavaScript","HTML","CSS","Git"]}/>
        </div>
      </div>

      <div className="card">
        <a href="https://daniel01101000.github.io/Rick-and-Morty-Api/" target="_blank" rel="noopener noreferrer">
          <img src={ApiRick} alt="ApiRick" />
        </a>
        <div className="card-content">
          <h3>ApiRick</h3>
          <p>{t("Fullstack App (Browse Rick and Morty Characters)")}</p>
          <TechStack technologies={["React","JavaScript","HTML","CSS","Git"]}/>
        </div>
      </div>

      <div className="card">
        <a href="https://daniel01101000.github.io/Quizzes/" target="_blank" rel="noopener noreferrer">
          <img src={Quizzes} alt="Quizzes" />
        </a>
        <div className="card-content">
          <h3>Quizzes</h3>
          <p>{t("Fullstack App (Create Custom Quizzes and Flashcards)")}</p>
          <TechStack technologies={["React","Redux","JavaScript","HTML","CSS","Git"]}/>
        </div>
      </div>

      <div className="card">
        <a href="https://daniel01101000.github.io/Lootly/" target="_blank" rel="noopener noreferrer">
          <img src={Lootly} alt="Lootly" />
        </a>
        <div className="card-content">
          <h3>Lootly</h3>
          <p>{t("Fullstack App (Show offers in technology)")}</p>
          <TechStack technologies={["React","Redux","JavaScript","HTML","CSS","Git"]}/>
        </div>
      </div>

    </div>
  )
}

export default Cards;