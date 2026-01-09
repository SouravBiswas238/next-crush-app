import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "First Blog Post" },
    { id: 2, title: "Another Interesting Article" },
    { id: 3, title: "Understanding Next.js Layouts" },
  ];

  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li className="my-3 cursor-pointer" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
