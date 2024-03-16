import React from 'react'

const Book = (props) => {
  return (
    <div className="Book" style={{ width: "40%", marginBottom: "50px" }}>
    <img src={props.Img} alt=" Image" />
    <div className="dishDetails">
      <div className="headingPriceWrapper">
        <h2>{props.title}</h2>
        <h2>{props.author}</h2>
      </div>
  </div>
  </div>
);
  
}

export default Book
