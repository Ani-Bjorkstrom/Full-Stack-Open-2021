import React, { useState } from 'react'


const StatisticLine = ({text, value, sign}) => {
  return(
    <tr><td>{text}{value}{sign}</td></tr>
  )
}



const App = () => {

  const [good, setGood] = useState(0)
  const [allGood, setAllGood] = useState([])
  const [neutral, setNeutral] = useState(0)
  const [allNeutral, setAllNeutral] = useState([])
  const [bad, setBad] = useState(0)
  const [allBad, setAllBad] = useState([])
  const lenGood = allGood.length 
  const lenNeutral = allNeutral.length 
  const lenBad = allBad.length 
  const lenAll = lenGood + lenNeutral + lenBad



  

  const Button = (props) => (
      <button onClick={props.Click}>
        {props.text}
      </button>
    )
  
  const GoodClick = () => {
    
    setGood(good + 1)
    setAllGood(allGood.concat(good))
    

  } 

  const NeutralClick = () => {
    setNeutral(neutral + 1)
    setAllNeutral(allNeutral.concat(neutral))

    
   
  } 

  const BadClick = () => {
    setBad(bad + 1)
    setAllBad(allBad.concat(bad)) 


  } 
  if (lenAll){
    return (
      <>
      <h1>give feedback</h1>
      
      <Button
      Click = {GoodClick}
      text = "good"/>
      <Button 
      Click = {NeutralClick}
      text = "neutral"/>
      <Button 
      Click = {BadClick}
      text = "bad"
      />
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good " value={lenGood} />
          
          <StatisticLine text="Neutral " value={lenNeutral} />
          
          <StatisticLine text="Bad " value={lenBad} />

          <StatisticLine text="All " value={lenAll}/>

          <StatisticLine text="Average " value={(lenGood-lenBad)/lenAll}/>

          <StatisticLine text="Positive " value={lenGood/lenAll*100} sign = " %"/>
          
        </tbody>
      </table>

    </>
    )
  }
  return(
    <>
      <h1>give feedback</h1>
      
      <Button
      Click = {GoodClick}
      text = "good"/>
      <Button 
      Click = {NeutralClick}
      text = "neutral"/>
      <Button 
      Click = {BadClick}
      text = "bad"
      />
      <p>No feedback given</p>

    </>
  )
}


export default App
