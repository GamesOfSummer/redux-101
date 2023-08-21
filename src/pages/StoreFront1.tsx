import React from "react";
import Link from "next/link";
import { addToCart } from "../StoreSlice";
import { useAppDispatch } from "@/hooks";

function StoreFront1() {
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
      <h1>Store 1</h1>
      <Link href="/StoreFront2">Go to Store Front 2</Link>
      <br />
      <button onClick={handleClick}>Add Item 1</button>
    </div>
  );
}

export default StoreFront1;
