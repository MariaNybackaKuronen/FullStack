import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return <tr>
    <td>
    {props.text}
    </td>
    <td>
    {props.value}
    </td>
  </tr>
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good*1 + props.neutral*0 + props.bad*-1)/
    (props.good + props.neutral + props.bad)
  const positive = ((props.good/(props.good + props.neutral + props.bad))*100) + "%"
  if(all<=0)
    return <p>No feedback given</p>
  return <table>
    <tbody>
  <StatisticLine text="good" value={props.good} />
  <StatisticLine text="neutral" value={props.neutral} />
  <StatisticLine text="bad" value={props.bad} />
  <StatisticLine text="all" value={all} />
  <StatisticLine text="average" value={average} />
  <StatisticLine text="positive" value={positive}/>
    </tbody>
  </table>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={ () =>setGood(good+1)} text="good"/>
      <Button handleClick={ () =>setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={ () =>setBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good}
        bad={bad}
        neutral={neutral}
      />

    </div>
  )
}

export default App