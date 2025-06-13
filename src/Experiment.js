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

export default function Experiment({
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

    // Declare skills based on counterbalance
    let woodSkill;
    let stoneSkill;
    let buildSkill = 0.05;
    if(meta.CB === '0'){
        woodSkill = 0.75;
        stoneSkill = 0.25;
    }else{
        woodSkill = 0.25;
        stoneSkill = 0.75;
    }

    // console.log("Trial: " + trial + ". Trajectory #: " + trajectory.current)

    // Declare resources
    let [wood, setWood] = useState(0);
    let [stone, setStone] = useState(0);
    let [coin, setCoin] = useState(0);
    
    // Declare action history
    let [chops, setChops] = useState(0);
    let [mines, setMines] = useState(0);
    let [buyWood, setBuyWood] = useState(0);
    let [buyStone, setBuyStone] = useState(0);
    let [sellWood, setSellWood] = useState(0);
    let [sellStone, setSellStone] = useState(0);
    let [build, setBuild] = useState(0);

    // Popup handling
    let [showPopup, setShowPopup] = useState(false);
    let [message, setMessage] = useState('');

    // Dev options
    let [maxTrials, setMaxTrials] = useState(parseInt(meta.numTrials));

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

    /* Generate market decider choices based on random agent trajectory */
    var Decider = () => {
        var prediction = parseFloat(preds[trajectory.current][(trial + 1).toString()])
        let skilled_resource = meta.CB === '0' ? 'wood' : 'stone'
        let unskilled_resource = meta.CB === '0' ? 'stone' : 'wood'
        return (prediction > Math.random() ? skilled_resource : unskilled_resource)

    };

    // Attempt to gather a resource
    var Collect = resource => {
        setTrial(trial + 1);
        let rand;
        if (resource === 'wood') {
            rand = Math.random();
            // Add a chop
            setChops(chops + 1);
            // If the chop was successful, increase wood, otherwise do nothing
            if(woodSkill > rand) {
                setWood(wood + 1);
                setMessage('You succeeded at collecting wood! Total wood: ' + (wood + 1))
            }else{
                setWood(wood) ;  
                setMessage('You failed at collecting wood. Total wood: ' + wood)
            }      
        } else {
            rand = Math.random();
            // Add a mine
            setMines(mines + 1);
            // If the mine was successful, increase stone, otherwise do nothing
            if(stoneSkill > rand) {
                setStone(stone + 1);
                setMessage('You succeeded at collecting stone! Total stone: ' + (stone + 1))
            }else{
                setStone(stone) ;  
                setMessage('You failed at collecting stone. Total stone: ' + stone)
            }      
        }
    };

    // Called when player tries to sell a resource
    var Sell = resource => {
        setTrial(trial + 1);
        // Get decider choice
        var outcome = Decider();
        // Increase alpha or beta counters for resource collections
        if (resource === 'wood') {
            setSellWood(sellWood + 1);
        } else {
            setSellStone(sellStone + 1);
        }
        // Add coin if outcome matches the resource, otherwise do nothing
        if(outcome === resource){
            SellSuccess(resource);
        } else {
            setCoin(coin);
            setMessage('You brought ' + resource + ', but the market guessed ' + outcome + '...')
        }       
    }

    // Called if resource is successfully sold
    var SellSuccess = resource => {
        // Increase coin and decrease resource as long as it is there
        if (resource === 'wood' && wood >= 1) {
            setCoin(coin + 1);
            setWood(wood - 1);
            setMessage('You succeeded at selling wood! Total coin: ' + (coin + 1))
        } else if (resource === 'stone' && stone >= 1) {
            setCoin(coin + 1);
            setStone(stone - 1);
            setMessage('You succeeded at selling stone! Total coin: ' + (coin + 1))
        } else if (resource === 'wood' && wood < 1) {
            setMessage("You tried to sell wood, but you didn't have enough...")
        } else if (resource === 'stone' && stone < 1) {
            setMessage("You tried to sell stone, but you didn't have enough...")
        }
    }

    // Called when player tries to buy a resource
    var Buy = resource => {
        setTrial(trial + 1);
        // Increment counters
        resource === 'wood' ? setBuyWood(buyWood + 1) : setBuyStone(buyStone + 1);
        //If the agent has enough coin to buy...
        if (coin >= 2){
            // Decrease coin...
            setCoin(coin - 2);
            // and increase resource
            resource === 'wood' ? setWood(wood + 2) : setStone(stone + 2);
            setMessage('You bought ' + resource + '. Total coin: ' + (coin - 2))
        }else{
            setMessage("You tried to buy " + resource + ", but you didn't have enough coin...")
        }
    }

    // Called when "build house" is pressed
    var House = () => {
        setTrial(trial + 1);
        // Increment counter
        setBuild(build + 1);
        let rand = Math.random();
        (buildSkill > rand && wood >= 1 && stone >= 1) ? HouseSuccess() : setMessage('You failed at building a house...');

    }

    // Called if House is successfully built.
    var HouseSuccess = () => {
        setCoin(coin + 15);
        setWood(wood - 1);
        setStone(stone - 1);
        setMessage('You successfully built a house! Total coin: ' + (coin + 15))
    }

    return (
        <div className="Wrapper">
            <div className="Instructions small" style={{padding: 5 + '%'}}>
            <TrialPopup
            open={showPopup}
            setOpen={() => setShowPopup(false)}
            message={message}>
            </TrialPopup>
                <div className="row">
                    <div className="column">You have <br /><b>{wood} wood.</b></div>
                    <div className="column">You have <br /><b>{stone} stone.</b></div>
                    <div className="column">You have <br /><b>{coin} coin.</b></div>
                    <div className="column">Trial #: <br /><b>{trial}/{maxTrials}</b></div>
                </div>
                <p></p>
                <div className="button-row">
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        setShowPopup(false);
                        Collect('wood');
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'collect_wood', 'time': date, 'message': message, 'trajectory': trajectory.current, 'prediction': preds[trajectory.current][trial.toString()], 'points': coin}
                        ])
                    }}>
                    Chop wood
                    </button></div>
                    <div className="button-block fake"></div>
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        setShowPopup(false);
                        Collect('stone');
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'collect_stone', 'time': date, 'message': message, 'trajectory': trajectory.current, 'prediction': preds[trajectory.current][trial.toString()], 'points': coin}
                        ])
                    }}>
                    Mine stone
                    </button></div>
                </div>
                <div className="button-row">
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        setShowPopup(false);
                        Sell('wood');
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'sell_wood', 'time': date, 'message': message, 'trajectory': trajectory.current, 'prediction': preds[trajectory.current][trial.toString()], 'points': coin}
                        ])
                    }}>
                    Sell wood
                    </button></div>
                    <div className="button-block fake"></div>
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        setShowPopup(false);
                        Sell('stone');
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'sell_stone', 'time': date, 'message': message, 'trajectory': trajectory.current, 'prediction': preds[trajectory.current][trial.toString()], 'points': coin}
                        ])
                    }}>
                    Sell stone
                    </button></div>
                </div>
                <div className="button-row">
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        setShowPopup(false);
                        Buy('wood');
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'buy_wood', 'time': date, 'message': message, 'trajectory': trajectory.current, 'prediction': preds[trajectory.current][trial.toString()], 'points': coin}
                        ])
                    }}>
                    Buy wood
                    </button></div>
                    <div className="button-block fake"></div>
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        setShowPopup(false);
                        Buy('stone');
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'buy_stone', 'time': date, 'message': message, 'trajectory': trajectory.current, 'prediction': preds[trajectory.current][trial.toString()], 'points': coin}
                        ])
                    }}>
                    Buy stone
                    </button></div>
                </div>
                <div className="button-row">
                    <div className="button-block"><button
                    className='ready'
                    onClick={() => {
                        var date = +new Date();
                        setShowPopup(false);
                        House();
                        setShowPopup(true);
                        setData([
                            ...data,
                            {'trial': trial, 'action': 'build', 'time': date, 'message': message, 'trajectory': trajectory.current, 'prediction': preds[trajectory.current][trial.toString()], 'points': coin}
                        ])
                    }}>
                    Build house
                    </button></div>
                </div>
                <>
                {__DEV__ ? (
                    <span>
                    Test parameters:
                    <br />
                    Trial number: {trial}. Decider skill-based prediction: {Math.round(parseFloat(preds[trajectory.current][trial.toString()]) * 100) / 100}.
                    </span>
                ) : null}
                </>
            </div>
        </div>
    )
}