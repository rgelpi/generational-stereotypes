import { useState } from "react";
import { time } from "./utils";
import "./App.css";

let PROLIFIC_COMPLETION_URL =
  "https://app.prolific.com/submissions/complete?cc=C1CNJRQB";

let POST_URL = "";

function getUserAgent() {
  return btoa(navigator.userAgent);
}

function getTimezone() {
  if (window.Intl) {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  let fallback = new Date().getTimezoneOffset() / 60;
  return fallback;
}

function doSubmitResults({ meta, data, answers, comments }) {
  // meta:
  //   PROLIFIC_PID
  //   STUDY_ID
  //   SESSION_ID

  // experimentId (constant for a given experiment)
  let experimentId;
  if (meta.type === "agent"){
    experimentId = "stereotypes-web";
  }else{
    experimentId = "stereotypes-web-market";
  }
  // sessionId (unique for a given experimental session, but not necessarily unique to a single request (e.g., can save experimental data incrementally)
  let sessionId = meta.sessionId;

  let postBody = {
    origin: window.location.origin,
    user_agent: getUserAgent(),
    meta: meta,
    submit_time: time(),
    timezone: getTimezone(),
    experiment_data: JSON.stringify(data),
    answers: answers,
    comments: comments
  };

  return fetch(POST_URL, {
    method: "POST",
    body: JSON.stringify({ experimentId, sessionId, data: postBody }),
    headers: { "Content-Type": "application/json" },
  });
}




export default function FinishStage({
    meta,
    data,
    answers,
    __DEV__
}) {

    let [done, setDone] = useState(false);
    let [comments, setComments] = useState("");
    let [waitingOnResults, setWaitingOnResults] = useState(false);

    async function submitResults(evt) {
        setWaitingOnResults(true);
        doSubmitResults({ meta, data, answers, comments });
        setWaitingOnResults(false);
        setDone(true);
      }

    return (
        <div className="Wrapper">
            <div className="Instructions small">
                <>
                {__DEV__ ? (
                    <span>
                    Test parameters:
                    <br />
                    Meta: {JSON.stringify(meta)}.
                    <br />
                    Results: {JSON.stringify(data)}.
                    <br />
                    Answers: {JSON.stringify(answers)}.
                    </span>
                ) : null}
                </>
                <div>
                    <p>Thanks for participating!</p>
                    <p>
                    Do you have any comments, questions, or concerns? If so, please
                    enter them in the text field below. <i>(optional)</i>
                    </p>
                    <textarea
                    className="input-box"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    />
                    {!done ? (
                    <div>
                        <p>
                        Please click the button to submit your results and get your
                        completion code.
                        </p>
                        <p>
                        <b>
                        Please note: this process can take a few seconds. Do not navigate
                        away from this page.
                        </b>
                        </p>
                        {waitingOnResults ? <p>Sending results... please wait.</p> : null}
                        <button className="ready" onClick={submitResults} disabled={waitingOnResults}>
                        Submit and finish
                        </button>
                    </div>
                    ) : (
                    <div>
                        <p>Results submitted!</p>
                        <p style={{ fontWeight: "bold", fontSize: 26 }}>
                        <a href={PROLIFIC_COMPLETION_URL}>
                            Click here to return to Prolific (completion code: C1CNJRQB).
                        </a>
                        </p>
                    </div>
                    )}
                    </div>
            </div>
        </div>
    )
}