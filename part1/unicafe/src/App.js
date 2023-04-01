/** @format */

import './App.css';
import { useState } from 'react';

export default function App() {
  const [clicks, setClicks] = useState({ good: 0, bad: 0, neutral: 0 });

  const handleGoodReviews = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
    };
    setClicks(newClicks);
  };
  const handleBadReviews = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
    };
    setClicks(newClicks);
  };
  const handleNeutralReviews = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
    };
    setClicks(newClicks);
  };

  console.log(clicks);
  return (
    <div>
      <Heading content="Give Feedback" />
      <Button text="good" event={handleGoodReviews} />
      <Button text="bad" event={handleBadReviews} />
      <Button text="neutral" event={handleNeutralReviews} />
      <Heading content="Statistics" />
      <Statistics values={clicks} />
    </div>
  );
}
const Heading = ({ content }) => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

const Button = ({ text, event }) => {
  return <button onClick={event}>{text}</button>;
};
const Statistics = ({ values }) => {
  const all = values.good + values.bad + values.neutral;
  const goodScore = values.good * 1;
  const badScore = values.bad * -1;
  const average = (goodScore + badScore) / all;
  const positiveAverage = goodScore / all;
  console.log({ values });
  if (values.good !== 0 || values.bad !== 0 || values.neutral !== 0) {
    return (
      <table>
        <tbody>
          <StatisticsLine text="good" value={values.good} />
          <StatisticsLine text="bad" value={values.bad} />
          <StatisticsLine text="neutral" value={values.neutral} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positiveAverage} />
        </tbody>
      </table>
    );
  }
  return (
    <div>
      <p>No Feedback given</p>
    </div>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
