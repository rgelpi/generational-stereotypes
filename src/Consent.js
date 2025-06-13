import { useState } from "react";
import { isNonemptyString, __DEV__ } from "./utils";
import "./App.css";
import "./Consent.css"

export default function Consent({
  nextStage,
  meta,
  addDevProlificParams,
}) {
  let [isConsentGiven, setIsConsentGiven] = useState(false);

  let isReady =
    isNonemptyString(meta.sessionId);

  return (
    <div className="Consent">
      <p>
        Thank you for your interest in our study. Please review the following
        consent form and click the checkbox to provide your consent before
        proceeding.
      </p>
      <div>
        <h2>Consent form</h2>

        <p className="ConsentMeta">
          Principal Investigator: Dr. Wil Cunningham. University of Toronto,
          100 St. George Street, M5S 2E5.
        </p>

        <p>
          This research is being conducted by Dr. Wil Cunningham, a faculty
          member at the University of Toronto. Dr. Cunningham’s lab investigates
          computational models of social cognition. The study typically takes 15
          minutes, and you will be compensated £2.00 for your time. You may also
          receive a bonus based on your performance in the study.
        </p>

        <p>
          If you agree to take part in the research, there will be a short
          demonstration, after which you will fill out a brief on-line
          questionnaire. The questionnaires will involve reading information and
          answering questions. All of the information that we obtain during the
          research will be kept confidential, and not associated with your name
          in any way. There are no risks to you by participating in this study.
        </p>

        <p>
          Your participation in this research is voluntary. You are free to
          refuse to take part, and you may stop taking part at any time. You are
          free to discontinue participation in this study at any time with no
          penalty. If there is any question in the questionnaire that makes you
          uncomfortable or that you do not want to answer, it is your right to
          refrain from answering that question.
        </p>

        <p>
          Please note that you will not be able to withdraw your data after
          completing the experiment. This is because all data is completely
          anonymous and there is no identifying link between your name and the
          data that we collected.
        </p>

        <p>
          If you have any questions about the research, do not hesitate to
          contact the Office of Research Ethics at{" "}
          <Email>ethics.review@utoronto.ca</Email> or 416-946-3273.
        </p>

        <p>
          By selecting <i>I consent</i> in the field below, you acknowledge that
          you are 18 or older, have read this consent form, and agree to take
          part in the research. Remember, you can drop out at any time and still
          get compensated for your time. If you do not agree to take part,
          please return the submission in Prolific.
        </p>
      </div>
      <div className="ConsentCheckbox">
        <label>
          <input
            type="checkbox"
            value={isConsentGiven}
            onChange={(e) => setIsConsentGiven(!isConsentGiven)}
          />
          <span>I consent to participate in this study</span>
        </label>
      </div>
      <div>
        <p>
        </p>
      {isReady ? (
        <button
          className="ready"
          onClick={nextStage}
          disabled={!isConsentGiven}
        >
          {isConsentGiven ? "I'm ready!" : "Please check to indicate consent"}
        </button>
      ) : (
        <>
          <p className="ConsentMeta">Waiting for prolific parameters</p>
          {__DEV__ ? (
            <button onClick={addDevProlificParams}>
              Add test prolific params
            </button>
          ) : null}
        </>
      )}
      </div>
    </div>
  );
}

function Email({ children }) {
  return <a style={{color:'#44d'}} href={`mailto:${children}`}>{children}</a>;
}
