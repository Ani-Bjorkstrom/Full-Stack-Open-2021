import React, { useState } from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState( Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf, 0))
  const maxVote = Math.max(...vote)

  const handleClick = () => {
    setSelected(Math.floor((Math.random()*anecdotes.length)))    
  }

  const handleVote = () => {
    const copy = [...vote]
    copy[selected] +=1
    setVote(copy)
    console.log(maxVote)
    console.log(vote.indexOf(maxVote))
    
  }

  if (maxVote>0){
    return (
      <div>
        <div>
          <h1>Anecdote of the day</h1>
          {anecdotes[selected]}
        </div>
        <div>
  
          <p>Has {vote[selected]} votes</p>
          <Button id="vot" handleClick={handleVote} text = "Vote"/>
          
          <Button handleClick = {handleClick} text = "Next anecdote" />
          <h1>Anecdotes with most votes</h1>
          <p>{anecdotes[vote.indexOf(maxVote)]}</p>
        </div> 
      </div> 
    )
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
      </div>
      <div>

        <p>Has {vote[selected]} votes</p>
        <Button handleClick={handleVote} text = "Vote"/>
        
        <Button handleClick = {handleClick} text = "Next anecdote" />
      </div> 
    </div> 
  )
}

export default App;
