import React from "react";
import { addToCart, addToCartMerge } from "../CartSlice";
import { useAppDispatch } from "../hooks";
import { Link } from "react-router-dom";

function StoreFront1() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(
      addToCart({
        name: "Item 1",
      })
    );
  }

  function handleClickMerge() {
    dispatch(
      addToCartMerge({
        name: "Item 1",
      })
    );
  }

  return (
    <div>
      <hr></hr>
      <h1>Store 1</h1>
      <br />
      <button onClick={handleClick}>Add Item 1</button>
      <br />
      <button onClick={handleClickMerge}>Add Item 1 (Merge)</button>
    </div>
  );
}

export default StoreFront1;
