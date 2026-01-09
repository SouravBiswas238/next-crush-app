"use client";
import { use } from "react";

export default function BlogPage({ params }) {
  const { slug, id } = use(params);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Page</h1>
      <p>Blog ID: {id}</p>
    </div>
  );
}
