import { useState, useEffect } from "react";
import Intro from "./Intro";
import Consent from "./Consent";
import Experiment from "./Experiment";
import Questionnaire from "./Questionnaire";
// import AttentionChecks from "./AttentionChecks";
import FinishStage from "./FinishStage";
import { time, __DEV__, noop } from "./utils";
import "./App.css";
import MarketIntro from "./MarketIntro";
import MarketExperiment from "./MarketExperiment";

const CONSENT = "CONSENT"
const INTRO = "INTRO";
const EXPERIMENT = "EXPERIMENT";
const QUESTIONNAIRE = "QUESTIONNAIRE";
// const ATTN_CHECKS = "ATTN_CHECKS";
const FINISH = "FINISH";

// Switch between web app stages
function getNextStage(currentStage) {
  switch (currentStage) {
    case CONSENT:
      return INTRO;
    case INTRO:
      return EXPERIMENT;
    case EXPERIMENT:
      return QUESTIONNAIRE;
    case QUESTIONNAIRE:
    //   return ATTN_CHECKS;
    // case ATTN_CHECKS:
      return FINISH;
    default:
      return null;
  }
}

function App() {
  // Set initial values
  let [stage, setStage] = useState(CONSENT);
  let [results, setResults] = useState([]);
  let [answers, setAnswers] = useState({});
  // let [attentionChecks, setAttentionChecks] = useState({});

  // Initial meta values
  const [meta, setMeta] = useState({
    sessionId: "",
    startTime: time(),
    CB: "0", // Options: ["0", "1"]
    condition: "original", // Options: ["original", "rep2", "rep5"]
    numTrials: "200",
    type: "agent" // Options: ["agent", "market"]
  })
  const [dataset, setDataset] = useState(() => require('./agents/origagents.json'))

  useEffect(() => {
    // Update 
    var params = Object.fromEntries([...new URLSearchParams(window.location.search)])

    // Get unix time 
    var date = +new Date();
    // 12 possible counterbalances
    var time_cb = date % 12;
    // 0-5: 0; 6-11: 1;
    var cb = Math.floor(time_cb / 6) == 0 ? "0" : "1";
    // 0-2, 6-8: agent; 3-5, 9-11: market
    var type = "agent" // Math.floor(time_cb / 3) % 2 ? "agent": "market";
    // alternate between 0, 1, 2
    var condition;
    if(time_cb % 3 == 0) condition = "original";
    if(time_cb % 3 == 1) condition = "rep2";
    if(time_cb % 3 == 2) condition = "rep5";
    // console.log(date, time_cb, cb, type, condition);

    params.type = type;
    params.condition = condition;
    params.CB = cb;
    params.numTrials = type == "agent" ? 200 : 150;

    var jsonStringElement = params.type === 'agent' ? 'agents.json' : 'market.json'
    var datasetString = params.condition ?  ('./agents/' + params.condition.slice(0,4) + jsonStringElement) : null
    if(datasetString) setDataset(() => require('' + datasetString));
    setMeta(meta => { return {...meta, ...params}});
  }, []);

  let goToNextStage = (e) => setStage(getNextStage(stage));

  let addDevProlificParams = __DEV__
    ? () => {
        let qs = new URLSearchParams({
          sessionId: 1
        }).toString();
        // console.log(meta);
        window.location.search = qs;
      }
    : noop;

  let currentStage;
  if (meta.type === "agent"){
    switch (stage) {
      case CONSENT:
        currentStage = (
          <Consent
            nextStage={goToNextStage}
            meta={meta}
            addDevProlificParams={addDevProlificParams}
          />
        );
        break;
      case INTRO:
        currentStage = (
          <Intro
            nextStage={goToNextStage}
            meta={meta}
          />
        );
        break;
      case EXPERIMENT:
        currentStage = (
          <Experiment
            nextStage={goToNextStage}
            meta={meta}
            setMeta={setMeta}
            data={results}
            setData={setResults}
            dataset={dataset}
            __DEV__={__DEV__}
          />
        );
        break;
      case QUESTIONNAIRE:
        currentStage = (
          <Questionnaire
          nextStage={goToNextStage}
          meta={meta}
          answers={answers}
          setAnswers={setAnswers}
          />
        );
        break;
      // case ATTN_CHECKS:
      //   currentStage = (
      //     <AttentionChecks
      //       nextStage={goToNextStage}
      //       attentionChecks={attentionChecks}
      //       setAttentionChecks={setAttentionChecks}
      //     />
      //   );
      //   break;
      case FINISH:
        currentStage = (
        <FinishStage 
        meta={meta} 
        data={results} 
        answers={answers} 
        __DEV__={__DEV__}
        />
        );
        break;
      default:
        break;
    }
  } else {
    switch (stage) {
      case CONSENT:
        currentStage = (
          <Consent
            nextStage={goToNextStage}
            meta={meta}
            addDevProlificParams={addDevProlificParams}
          />
        );
        break;
      case INTRO:
        currentStage = (
          <MarketIntro
            nextStage={goToNextStage}
            meta={meta}
          />
        );
        break;
      case EXPERIMENT:
        currentStage = (
          <MarketExperiment
          nextStage={goToNextStage}
          meta={meta}
          setMeta={setMeta}
          data={results}
          setData={setResults}
          dataset={dataset}
          __DEV__={__DEV__}
          />
        )
        break;
      case QUESTIONNAIRE:
        currentStage = (
          <Questionnaire
          nextStage={goToNextStage}
          meta={meta}
          answers={answers}
          setAnswers={setAnswers}
          />
        );
        break;
      // case ATTN_CHECKS:
      //   currentStage = (
      //     <AttentionChecks
      //       nextStage={goToNextStage}
      //       attentionChecks={attentionChecks}
      //       setAttentionChecks={setAttentionChecks}
      //     />
      //   );
      //   break;
      case FINISH:
        currentStage = (
        <FinishStage 
        meta={meta} 
        data={results} 
        answers={answers} 
        __DEV__={__DEV__}
        />
        );
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="content">{currentStage}</div>
    </div>
  );
}

export default App;




