import React, { useState } from 'react'
import MemesData from '../MemesData'

function Meme() {
  const[meme,setMeme]= useState(
    {
      topText:"",
      bottomText:"",
      randomImage:"https://i.imgflip.com/30b1gx.jpg"
    }  
  )
  const[allMemeImage,setAllMemeImage] = useState(MemesData)

  function getMemeImage(){
    const memesArray = allMemeImage.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
        <div className='form'>
            <input placeholder='Top text' className='form-input' type='text' />
            <input placeholder='Bottom text' className='form-input' type='text' />
            <button onClick={getMemeImage} className='form-btn'>Get a new meme image 🖼</button>
        </div>
        <img src={meme.randomImage} className='memes-img'/>
    </main>
  )
}

export default Meme