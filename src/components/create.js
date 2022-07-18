import React, { useState } from 'react'

const Create = () => (

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    <div>
      <label>First Name</label>
      <input placeholder='First Name'  onChange={(e) => setFirstName(e.target.value)}/>
    
      <label>Last Name</label>
      <input placeholder='Last Name'  onChange={(e) => setLastName(e.target.value)}/>
    
      
    
    <button type='submit'>Submit</button>
    </div>
)

export default Create;