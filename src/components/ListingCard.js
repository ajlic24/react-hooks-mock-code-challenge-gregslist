import React, { useState } from "react";

function ListingCard({product, handleOnDelete}) {
  const {id, description, image, location} = product
  const [isLiked, setIsLiked] = useState(false)

  function handleLike() {
    setIsLiked(!isLiked)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(() => handleOnDelete(product))
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleLike} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLike} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
