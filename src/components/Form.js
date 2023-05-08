import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        Comment:"",
        isAgreed: true,
        employment: "",
        favColor:""
    })

    function handleChange(event){
        const {name,value, type ,checked} = event.target
        setFormData(prevData => {
            return{
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
           type='text'
           name="name"
           placeholder='Enter your name'
           onChange={handleChange}
           value={formData.name}
        />
        <input 
           type='email'
           name="email"
           placeholder='Enter your email'
           onChange={handleChange}
           value={formData.email}
        />
        <textarea 
           name="comment"
           placeholder='Enter your name'
           onChange={handleChange}
           value={formData.comment}
        />
        <input 
           type='checkbox'
           name="isAgreed"
           id='check-input'
           onChange={handleChange}
           value={formData.isAgreed}
        />
        <label htmlFor='check-input'>Do you agree to all our terms and conditions?</label>
        <br/>
        <br/>
        <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br/>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <button>Submit</button>
    </form>
  )
}

export default Form