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
    // img:"https://www.paperpapers.com/media/catalog/product/cache/26af58b6178898faa120837a4d31a0be/f/a/faviniart-bristolwht-811.jpg"  
    img: "https://cdn11.bigcommerce.com/s-2i5mq6440u/images/stencil/2048x2048/products/3762/9095/PlasticPaper-CutSheet__18809.1597757191.png?c=2"
  },
  scissors:{
    name: "Scissors",
    img: "https://media.istockphoto.com/id/899552266/photo/hair-scissors.jpg?s=612x612&w=0&k=20&c=lqzvrCuORt3gNSGD4fJtPyfhJSCTwMGYgIpdXaXJGWs="
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const play=(userChoice)=>{
    // console.log("chosen", userChoice)
    setUserSelect(choice[userChoice]);
  }
  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={userSelect}/>
        {/* <Box title="Computer"/> */}
      </div>
      <div className='main'>
        <button onClick={()=>play("rock")}>✊ROCK</button>
        <button onClick={()=>play("paper")}>🖐️PAPER</button>
        <button onClick={()=>play("scissors")}>✌️SCISSORS</button>
      </div>
      </div>
  )
}

export default App
