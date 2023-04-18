import React from 'react'
import { useParams } from 'react-router-dom'

const ThankyouView = () => {
  const { points } = useParams();

  return (
    <div id='thank-you'>
      <img src="../../../images/illustration-thank-you.svg" alt="thank you" />

      <p>You selected {points} out of 5</p>

      <h3>Thank you!</h3>

      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankyouView
