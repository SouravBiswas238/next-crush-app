import React from "react";

export default async function Comments({ commentsPromise }) {
  const comments = await commentsPromise;
  return (
    <div className="m-4 p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {comments?.map((comment) => (
        <div key={comment.id} className="mb-4 p-4 border-b">
          <div className="mb-2 flex align-center space-x-4 items-center">
            <h3 className="text-lg font-medium">{comment.name}</h3>
            <p className="text-sm text-gray-500">{comment.email}</p>
          </div>
          <p className="mt-2 text-gray-700">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
