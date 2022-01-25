import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({products, onDelete}) {

  function handleOnDelete(deletedProduct) {
    const newArray = products.filter(product => product.id !== deletedProduct.id)
    onDelete(newArray)
  }

  return (
    <main>
      <ul className="cards">
        {[...products].map(product => {
          return <ListingCard key={product.id} product={product} handleOnDelete={handleOnDelete} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
