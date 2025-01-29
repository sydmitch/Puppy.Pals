import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  return (
      <div className='App'>
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
          })
        }
        <p>{ featPupId && <p>{ featPupId }</p> }</p>
      </div>
  )
}

export default App
