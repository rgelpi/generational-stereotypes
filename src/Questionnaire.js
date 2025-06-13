import React, { useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import "./App.css";
import { surveyJson, surveyJsonMarket, themeJson } from "./surveys"

function Questionnaire({
    nextStage,
    meta,
    answers,
    setAnswers,
    __DEV__
}) {

    var [isComplete, setIsComplete] = useState(false);
    var model;
    if(meta.type === "agent"){
        model = new Model(surveyJson);
    }else{
        model = new Model(surveyJsonMarket);
    }
    
    model.applyTheme(themeJson);

    model.onComplete.add(
        (sender, options) => {

            sender.doComplete();
                
            setAnswers({
                ...answers,
                data: sender.data
            });

            if(sender.state === 'completed'){
                setIsComplete(true);
            }

        }
    )

    return (
        <>
        {!isComplete ? 
        <div className="SurveyWrapper">
        <Survey model={model} />
        </div> :
        <div className="SurveyWrapper">
            <div className="Instructions small">
                <p>
                    You have completed the survey portion of the study.
                </p>
                <button className="ready" onClick={nextStage}>Click to receive completion code</button>
            </div>
        </div> }
        </>
        
    )

    
};



// function saveSurveyResults(url, json) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }

export default Questionnaire;