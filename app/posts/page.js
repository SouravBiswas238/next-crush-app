import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold  m-4">Posts Page</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="m-4 p-4 border rounded-lg shadow">
            <Link href={`/posts/${post?.id}`}>
              <span className="text-blue-500 hover:underline">Read More</span>
            </Link>
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
