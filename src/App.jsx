import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './component/Box'

// 1. create 2 boxes(title, pics, result)
// 2. 3 buttons of rock, paper, scissors
// 3. when a button is clicked, result shows in the box
// 4. computer shows a random result
// 5. it shows who wins
// 6. border color changes depending on the result(win = green, lose = red, tie = black)
const choice ={
  rock:{
    name:"Rock",
    img:"https://m.media-amazon.com/images/I/61W8BVTF10L.jpg"
  },
  paper:{
    name:"Paper",
    img: "https://cdn11.bigcommerce.com/s-2i5mq6440u/images/stencil/2048x2048/products/3762/9095/PlasticPaper-CutSheet__18809.1597757191.png?c=2"  
  },
  scissors:{
    name: "Scissors",
    img: "https://media.istockphoto.com/id/899552266/photo/hair-scissors.jpg?s=612x612&w=0&k=20&c=lqzvrCuORt3gNSGD4fJtPyfhJSCTwMGYgIpdXaXJGWs="
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const [started, setStarted] = useState(false)
  const [userScore, setUserScore] =useState(0)
  const [computerScore, setComputerScore] =useState(0)

  const play=(userChoice)=>{
    // console.log("chosen", userChoice)
    // setUserSelect(choice[userChoice]);
    // let computerChoice = randomChoice()
    // setComputerSelect(computerChoice)
    // setResult(judgement(choice[userChoice], computerChoice))
    // setStarted(true)
    const user = choice[userChoice];
    setUserSelect(user);
    const computer = randomChoice();
    setComputerSelect(computer);
    const roundResult = judgement(user, computer);
    setResult(roundResult);
    setStarted(true);
    if(roundResult === "WIN") setUserScore(prev => prev + 1)
      else if(roundResult ==="LOSE") setComputerScore(prev => prev + 1)
  }

  const judgement=(user, computer)=>{
    // console.log("user", user, "computer", computer)
    // user == computer -> tie
    // user: rock vs computer: scissors => user wins
    // user: rock vs computer: paper => user loses
    // user: scissors vs computer: paper => user wins
    // user: scissors vs computer: rock => user loses
    // user: paper vs computer: rock => user wins
    // user: paper vs computer: scissors => user loses

    if(user.name === computer.name){
      return "TIE"
    } else if(user.name ==="Rock")return computer.name =="Scissors"?"WIN":"LOSE"
    else if(user.name ==="Scissors")return computer.name =="Paper"?"WIN":"LOSE"
    else if(user.name ==="Paper")return computer.name =="Rock"?"WIN":"LOSE"
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice)
    // console.log("item array", itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length)
    let final = itemArray[randomItem]
    // console.log("final", final)
    // console.log("random value", randomItem)
    return choice[final]
  }

  return (
    <div className='App'>
      <div className='main'>{!started ? (
          <Box title="Ready to play?" item={null} result="" started={false} initial />
        ) : (
          <>
            <Box title="You" item={userSelect} result={result} started={true} score={userScore}/>
            <Box title="Computer" item={computerSelect} result={result} started={true} score={computerScore}/>
          </>
        )}
      </div>
      <div className='button-group'>
        <button onClick={()=>play("rock")}>✊ROCK</button>
        <button onClick={()=>play("paper")}>🖐️PAPER</button>
        <button onClick={()=>play("scissors")}>✌️SCISSORS</button>
        
      </div>
      </div>
  )
}

export default App
