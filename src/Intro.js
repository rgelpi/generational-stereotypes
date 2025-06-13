import "./App.css";


export default function App({
    nextStage,
    meta
}) {
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
          <div className="Instructions small">
            <p>
              In this task, you are a worker who is trying to gain as many <span className="heavy">coins</span> as possible. 
              You can acquire coins by actions such as selling your resources to a <span className="heavy">market decider</span> or 
              building houses. You will receive a bonus if your number of coins collected is in the top 10% of all participants.
            </p>
            <p>
              Workers have different kinds of <span className="heavy">skills</span>. Some workers are good at collecting different 
              kinds of resources, while some workers are good at building houses.
            </p>
            <p>
              If you want to sell your resources, you need to bring the <span className="heavy">same resource</span> that the market 
              decider guesses that you have.
            </p>
            <button 
              className="ready"
              onClick={nextStage}
            >
              Okay, I got it
            </button>
          </div>
        </div>
      </div>
    );
  }