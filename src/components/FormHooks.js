import React, { useState } from "react"
import useInput from "../hooks/useInput"
import { TextInput } from "grommet"

const FormHooks = () => {
  const [title, setTitle] = useState("")
  const descriptionInput = useInput("")
  const phoneInput = useInput("")

  function submitForm(e) {
    e.preventDefault()
    console.log(title, descriptionInput.value, phoneInput.value)
  }

  return (
    <div>
      <h1>Form hooks</h1>
      <p>{title}</p>
      <form onSubmit={submitForm}>
        <TextInput
          type='text'
          name='title'
          id='title'
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <p>{descriptionInput.value}</p>
        <TextInput
          type='text'
          name='description'
          placeholder='Description'
          id='description'
          {...descriptionInput}
        />
        <p>{phoneInput.value}</p>
        <TextInput
          type='tel'
          name='phone'
          placeholder='Phone'
          id='phone'
          {...phoneInput}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default FormHooks
