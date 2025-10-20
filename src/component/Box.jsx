import React from 'react'

const initialImage = "https://www.wikihow.com/images/b/b3/Play-Rock,-Paper,-Scissors-Step-10-Version-5.jpg"

const Box = (props) => {
    // console.log("props", props)
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <img className='item-img' src={props.item ? props.item.img : initialImage}/>
        <h2>WIN</h2>
        </div>
  )
}


export default Box