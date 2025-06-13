import "./App.css";
import { useState } from "react";


export default function App({
    nextStage,
    meta
}) {
    let [nextSection, setNextSection] = useState(false);

    return (
      <div className="App">
        <div className="Wrapper">
          <header className="Instructions">
            <p>
              Welcome to the <span className="heavy">Market Game</span>!
            </p>
          </header>
          <p>
          </p>
          <>
          {nextSection ? 
          (
            <div className="Instructions small">
            <p>
              Different aliens have different appearances. Every alien has a <span className="heavy">colour</span> (the colour of their head, arms, and legs) and a <span className="heavy">nametag</span> (the grey pattern on their body).
            </p>
            <div className="row">
              <img className="picture-small" src={require('./img/green/alien_212_right.png')} />
              <span className="picture-span"></span>
              <img className="picture-small" src={require('./img/green/alien_296_right.png')} />
            </div>
            <p>
              Two aliens can have the same colour, but if their nametag is different, they are two different aliens. For example, these two aliens are different individuals.
            </p>
            <button 
              className="ready"
              onClick={nextStage}
            >
              Okay, I got it
            </button>
          </div>
          ) : (
            <div className="Instructions small">
            <p>
              In this task, you are trying to predict the resources that different <span className="heavy">aliens</span> bring to the market. 
            </p>
            <p>
              At the beginning of every turn, you will see the appearance of an alien, and have the option of guessing whether this alien 
              has brought <span className="heavy">wood</span> or <span className="heavy">stone</span> to the market.
            </p>
            <p>
              You gain <span className="heavy">points</span> for correctly guessing what an alien brings to the market. Your goal is to gain 
              as many points as you can in the allotted time, and you will receive a bonus if your number of points collected is in the top 10% for all participants.
            </p>
            <button 
              className="ready"
              onClick={() => setNextSection(true)}
            >
              Okay, I got it
            </button>
          </div>
          )};
          </>
        </div>
      </div>
    );
  }