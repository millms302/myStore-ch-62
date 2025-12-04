import { useState } from 'react'
import './About.css'

function About() {
  const [isEmailVisible, setIsEmailVisible] = useState(true);

  function showEmailInformation() {
    console.log("Show email information")
    setIsEmailVisible(!isEmailVisible)
  }

  return (
    <div className='text-center'>
      <h1>About Page</h1>
      
      { 
        isEmailVisible == true 
        ? <p>millms302@gmail.com</p> 
        : <p>Click the button to see my email address.</p>
      }

      <button className='btn btn-dark' onClick={showEmailInformation}>
        {
          isEmailVisible == true 
          ? "Hide my email" 
          : "Show my email"
        }
      </button>
    </div>
  )
}
export default About