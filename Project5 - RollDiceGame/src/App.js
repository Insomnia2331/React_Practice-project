import React from "react"
import './style.css'
import Die from'./Die'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(()=>{
    const allHeld = dice.every(die => die.isHeld)
    const first = dice[0].value
    const allSame = dice.every(die=>die.value === first)
    if (allHeld && allSame){
      setTenzies(true)
    }
  },[dice])

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6)+1,
        isHeld: false,
        id: nanoid()
    }
  }

  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice(){
    if(!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
        }))
    } else{
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDice=> oldDice.map(die => {
      return die.id === id? {...die, isHeld:!die.isHeld}:
      die
    }))
  }

  const diceElements = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)}/>))

    return (
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">{tenzies === true?"You Win!":"Tenzies"}</h1>
        <p className="instructions">{tenzies === true?"Nice! Wanna one more game? Click the new game button~":"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>{tenzies === true?"New Game":"Roll"}</button>
      </main>
    )
}