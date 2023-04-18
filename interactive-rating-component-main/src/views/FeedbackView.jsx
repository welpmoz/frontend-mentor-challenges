import React, { useState } from 'react'
import Rating from '../Rating'
import { useNavigate } from 'react-router-dom'

const FeedbackView = () => {
  const ratings = [1, 2, 3, 4, 5]
  const [selected, setSelected] = useState(0)
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`rate/${selected}`)
  }

  return (
    <div id='feedback'>
      <div className='circle'>
        <img src="../../../images/icon-star.svg" alt="star savage" />
      </div>
      <h3>How did we do?</h3>

      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>

      <div className='numbers'>
        {ratings.map(rating => <Rating selected={selected} rate={rating} key={rating} setSelected={setSelected} />)}
      </div>

      <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FeedbackView
