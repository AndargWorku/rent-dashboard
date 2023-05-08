import React from 'react'

const CarItem = (props) => {

    const {category,type,rentPrice,imgUrl,carName,groupSize}=props.item
  return (
    <div className="car_item">
    <div className="car_item-top">
      <div className="car_item-title">
      <h3>{carName}</h3>
      <span><i class="ri-heart-line"></i></span>
      </div>
      <p>{category}</p>
    </div>
    <div className="car_img">
      <img src={imgUrl} alt=""/>
    </div>
    <div className="car_item-bottom">
      <div className="car_bottom-left">
        <p><i class="ri-file-user-line"></i>{groupSize}</p>
        <p><i class="ri-repeat-line"></i>{type}</p>


      </div>
      <p className="car_rent">${rentPrice}/d</p>

    </div>

  </div>
  )
}

export default CarItem
