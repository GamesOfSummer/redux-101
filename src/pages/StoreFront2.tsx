import React from "react";

import { addToCart } from "../CartSlice";
import { useAppDispatch } from "../hooks";

function StoreFront2() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(
      addToCart({
        name: "Item 2",
      })
    );
  }

  return (
    <div>
      <hr></hr>
      <h1>Store 2</h1>

      <br />
      <button onClick={handleClick}>Add Item 2</button>
    </div>
  );
}

export default StoreFront2;
