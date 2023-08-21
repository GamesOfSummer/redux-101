import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function StoreFront2() {
  return (
    <div>
      <h1>Store 2</h1>
      <Link href="/StoreFront1">Go to Store Front 1</Link>
    </div>
  );
}
