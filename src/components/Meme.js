import React from 'react'

function Meme() {
  return (
    <main>
        <div className='form'>
            <input placeholder='Top text' className='form-input' type='text' />
            <input placeholder='Bottom text' className='form-input' type='text' />
            <button className='form-btn'>Get a new meme image 🖼</button>
        </div>
    </main>
  )
}

export default Meme