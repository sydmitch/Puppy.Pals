import { useState } from 'react'
import {puppyList} from './data.js'
import './index.css'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log(featuredPup);
  return (
      <div className='App'>
        <h1>Puppy Pals!</h1>
        <div className='puppy-list'>
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
          })
        }
        {featPupId && (
          <div className='featured-puppy'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        </div>
      </div>
  )
}

export default App
