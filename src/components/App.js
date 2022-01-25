import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then(r => r.json())
      .then(data => setProducts(data))
  }, [])

  function handleChangeList(newList) {
    setProducts(newList)
  }

  return (
    <div className="app">
      <Header products={products} onSearch={handleChangeList} />
      <ListingsContainer products={products} onDelete={handleChangeList} />
    </div>
  );
}

export default App;
