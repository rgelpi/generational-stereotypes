import React, { useRef, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./App.css";

/* Popup function */
class TrialPopup extends React.Component {
    render() {
        return (
            <Popup
            open={this.props.open}
            position="bottom center"
            closeOnDocumentClick={false}
            >
            {close => (      
                    <div className="modal">
                        <button className="close" onClick={this.props.setOpen}> &times; </button>
                        <div className="content">
                            {' '}
                            <br />
                            {this.props.message}
                            <br /><br />
                        </div>
                        <div className="actions">
                            <button className="ready" onClick={this.props.setOpen}> Okay, I got it
                            </button>        
                        </div>
                    </div>)}
            </Popup>

        )
    }
}

export default function MarketExperiment({
    nextStage,
    meta,
    setMeta,
    data,
    setData,
    dataset,
    __DEV__
}) {

    // Stage and trial sections
    let [subStage, setSubStage] = useState(1);
    let [trial, setTrial] = useState(0);
    let stageComponent;
    // let stageName;

    const trajectory = useRef(Math.floor(Math.random() * dataset.length))

    if (subStage === 0){
        // Task introduction
        stageComponent = <IntroStage
        subStage={subStage}
        setSubStage={setSubStage}
        />
    } else if (subStage === 1){
        // Main task stage
        // stageName = 'Market Game'
        stageComponent = <TaskStage
        nextStage={nextStage}
        meta={meta}
        setMeta={setMeta}
        data={data}
        setData={setData}
        trial={trial}
        setTrial={setTrial}
        preds={dataset}
        trajectory={trajectory}
        __DEV__={__DEV__}
        />
    } else {
        // Error fallback
        stageComponent = <div>NO IMPLEMENTATION FOR {subStage}</div>;
    }


    return (
        <>
            {stageComponent}
        </>
    )

}

function IntroStage({ subStage, setSubStage }){
    return (
        <>
            <p>
                <button
                className="ready"
                onClick={() => setSubStage(subStage + 1)}
                >Yes, I'm ready to continue
                </button>
            </p>
        </>
    )
}

function TaskStage({ 
    nextStage,
    meta,
    setMeta,
    data,
    setData,
    trial,
    setTrial,
    preds,
    trajectory,
    __DEV__
 }){


    // Popup handling
    let [coin, setCoin] = useState(0);
    let [showPopup, setShowPopup] = useState(false);
    let [message, setMessage] = useState('');

    // Dev options
    let [maxTrials, setMaxTrials] = useState(parseInt(meta.numTrials));

    let [trajectories, setTrajectories] = useState(preds);

    /* Button function to go the next trial. If all trials are
    complete, then go to the next stage. */
    useEffect(() => {
        // console.log(meta);
        if (__DEV__) {
            setMaxTrials(10);
        }
        // Go to the next stage if the last trial has been reached
        if ( trial >= maxTrials ) {            
            return nextStage;
        }
    });

    var weightedRandom = options => {
        var i;

        var approach = [options[0].approach];
        
    
        for (i = 1; i < options.length; i++)
            approach[i] = options[i].approach + approach[i - 1];
        
        var random = Math.random() * approach[approach.length - 1];
        
        for (i = 0; i < approach.length; i++)
            if (approach[i] > random)
                break;

        return options[i]
    }

    // Market values
    let [currentAgent, setCurrentAgent] = useState(() => weightedRandom(trajectories));

    // Provide the agent action based on their id code
    var AgentAction = outcome => {
        return outcome.prob_wood > Math.random() ? 'wood' : 'stone'
    }

    var AgentImage = outcome => {
        let colour = outcome.colour;
        let agent_id = outcome.id;
        return './img/' + colour + '/alien_' + agent_id + '_right.png';
    }

    var AgentStore = outcome => {
        return {
            'colour': outcome.colour,
            'skill': outcome.skill,
            'id': outcome.id,
            'approaches': outcome.approach,
            'sum_wood': outcome.sell_wood,
            'sum_stone': outcome.sell_stone
        }
    }

    // Guess whether the agent 
    var Guess = (resource) => {
        setTrial(trial + 1);
        let outcome = AgentAction(currentAgent);
        if (resource === outcome){
            setMessage('The alien sold you ' + resource + '. You got 1 point! You now have ' + (coin + 1) + ' point' + (coin + 1 !== 1 ? 's' : '') + '.');
            setCoin(coin + 1);
        } else {
            setMessage('The alien brought ' + outcome + ', but you guessed ' + resource + '. You have ' + coin + ' point' + (coin !== 1 ? 's' : '') + '.');
        }
    }

    return (
        <div className="Wrapper">
            <div className="Instructions small" style={{padding: 5 + '%'}}>
            <TrialPopup
            open={showPopup}
            setOpen={() => {
                setShowPopup(false);
                setCurrentAgent(() => weightedRandom(trajectories));
            }}
            message={message}>
            </TrialPopup>
                <div className="row">
                    <div className="column">&nbsp;</div>
                    <div className="column">You have <br /><b>{coin} point{coin !== 1 ? 's': ''}.</b></div>
                    <div className="column">Trial #: <br /><b>{trial}/{maxTrials}</b></div>
                    <div className="column">&nbsp;</div>
                </div>
                <p>This alien came to the market. What do you think the alien is bringing?</p>
                <div >
                <img className="picture" src={require('' + AgentImage(currentAgent))} />
                </div>
                <p></p>
                <div className="button-row">
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        // console.log(date);
                        let interaction = AgentStore(currentAgent);
                        console.log(interaction);
                        setShowPopup(false);
                        Guess('wood');
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'guess_wood', 'time': date, 'message': message, 'agent': interaction, 'points': coin}
                        ])
                        
                        // console.log(currentAgent);
                    }}>
                    Guess wood
                    </button></div>
                    <div className="button-block fake"></div>
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        // console.log(date);
                        let interaction = AgentStore(currentAgent);
                        console.log(interaction);
                        setShowPopup(false);
                        Guess('stone');
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'guess_stone', 'time': date, 'message': message, 'agent': interaction, 'points': coin}
                        ])
                        // console.log(currentAgent);
                    }}>
                    Guess stone
                    </button></div>
                </div>
                <>
                {__DEV__ ? (
                    <span>
                    Test parameters:
                    <br />
                    Trial number: {trial}. Current agent wood probability: {Math.round(parseFloat(currentAgent.prob_wood) * 100) / 100}.
                    </span>
                ) : null}
                </>
            </div>
        </div>
    )
}