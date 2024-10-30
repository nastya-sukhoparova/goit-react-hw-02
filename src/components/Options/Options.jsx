import React from "react";
import styles from "./Options.module.css";

const Options = ({ onLeaveFeedback, onResetFeedback, hasFeedback }) => (
  <div className={styles.optionsContainer}>
    <button onClick={() => onLeaveFeedback("good")}>Good</button>
    <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
    <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
    {hasFeedback && (
      <button onClick={onResetFeedback} className={styles.resetButton}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
