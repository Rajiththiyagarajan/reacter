import React, { useState } from 'react'

function App() {

  const [name,setname]=useState("");


  const handler = (e) =>{
    e.preventDefault();
    alert(name);
  }



  return (
    <form onSubmit={handler}>

      <input type='text ' placeholder='enter name here ' value={name} onChange={(e) => setname(e.target.value)} />
      <button type='submit'>submiterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</button>

    </form>
  )
}

export default App