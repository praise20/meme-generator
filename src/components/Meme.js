import React, { useEffect, useState } from 'react'
// import MemesData from '../MemesData'

function Meme() {
  const[meme,setMeme]= useState(
    {
      topText:"",
      bottomText:"",
      randomImage:"https://i.imgflip.com/1ur9b0.jpg"
    }  
  )
  const[allMemes,setallMemes] = useState([])

  useEffect(() =>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setallMemes(data.data.memes))
  }, [])

  function getMemeImage(){
    // const allMemes = allMemes.data.memes
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({ 
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event){
    const{name,value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  return (
    <main>
        <div className='form'>
            <input 
              placeholder='Top text' 
              className='form-input' 
              name='topText'
              value={meme.topText}
              onChange={handleChange}
              type='text' />
            <input 
              placeholder='Bottom text' 
              className='form-input' 
              name='bottomText'
              value={meme.bottomText}
              onChange={handleChange}
              type='text' />
            <button 
              onClick={getMemeImage} 
              className='form-btn'>
                Get a new meme image 🖼
            </button>
        </div>
        <div className='meme'>
          <img src={meme.randomImage} className='meme-img'/>
          <h2 className='meme-text top'>{meme.topText}</h2>
          <h2 className='meme-text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme