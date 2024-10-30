import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.feedbackContainer}>
    <h2>Feedback Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;
