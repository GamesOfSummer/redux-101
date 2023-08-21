import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function StoreFront1() {
  function handleClick() {}

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
