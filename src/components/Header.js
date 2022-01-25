import React from "react";
import Search from "./Search";

function Header({products, onSearch}) {

  function filterData(searchItem) {
  const filtered = products.filter(product => product.description.includes(searchItem))
  onSearch(filtered)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterData={filterData} />
    </header>
  );
}

export default Header;
