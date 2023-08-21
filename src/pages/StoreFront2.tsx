import React from "react";
import Link from "next/link";
import { addToCart } from "../StoreSlice";
import { useAppDispatch } from "@/hooks";

function StoreFront2() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(
      addToCart({
        id,
        quantity: count,
      })
    );
  }

  return (
    <div>
      <h1>Store 2</h1>
      <Link href="/StoreFront1">Go to Store Front 1</Link>
      <br />
      <button onClick={handleClick}>Add Item 2</button>
    </div>
  );
}

export default StoreFront2;
