import React from 'react'

const Rating = ({rate, setSelected, selected}) => {
  const handleClick = () => {
    setSelected(rate)
  }

  return (
    <div onClick={handleClick} className={`circle ${selected === rate ? 'selected':''}`}>
      {rate}
    </div>
  )
}

export default Rating
