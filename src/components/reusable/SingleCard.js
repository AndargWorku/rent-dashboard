import React from 'react'

const SingleCard = (props) => {
    const{title,icon,totalNumber}=props.item
  return (
    <div>
      <div className="single_card">
                    <div className="card_content">
                        <h4>{title}</h4>
                        <span>{totalNumber}</span>

                    </div>
                    <span className="card_icon">
                        <i class={icon}></i>
                    </span>

                </div>
    </div>
  )
}

export default SingleCard
