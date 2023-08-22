import React from "react";

import { addToCart } from "../StoreSlice";
import { useAppDispatch } from "../hooks";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function StoreFront2() {
  const dispatch = useAppDispatch();

  function handleClick() {
    // dispatch(
    //   addToCart({
    //     id,
    //     quantity: count,
    //   })
    // );
  }

  return (
    <div>
      <h1>Store 2</h1>
      <Link to="/StoreFront1">Go to Store Front 1</Link>
      <br />
      <button onClick={handleClick}>Add Item 2</button>
    </div>
  );
}

export default StoreFront2;
