import React from 'react'

const initialImage = "https://cdn.dribbble.com/userupload/41784059/file/original-e83872e5740250de5168433da08c2dce.gif"

const Box = ({ title, item, result, started, initial, score }) => {
  let displayResult;
  if(title === "Computer" && result && result !== "TIE"){
    displayResult = result === "WIN" ? "LOSE" : "WIN";
  } else {
    displayResult = result;
  }

  return (
    <div className={`box ${initial ? 'initial' : ''} ${displayResult}`}>
      <h1>{title}</h1>
      {started && score !== undefined && <h2>Score: {score}</h2>}
      {!started && initial && (<div className="img-container"><img src={initialImage} className="initial-img"/></div>)}
      {started && item && (<div className="img-container"><img className='item-img' src={item.img}/></div>)}
      {started && displayResult && <h2 className={
      displayResult === "WIN" && title === "You" ? "WIN-text" :
      displayResult === "LOSE" && title === "You" ? "LOSE-text" :
      ""
    }>{displayResult}</h2>}
    </div>
  )
}

export default Box