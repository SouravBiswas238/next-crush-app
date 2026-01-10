import Comments from "@/app/components/Comments";
import getPosts from "@/lib/getPosts";
import getPostsComment from "@/lib/getPostsComment";
import { Suspense } from "react";

export default async function SinglePost({ params }) {
  const { id } = await params;

  const postPromise = await getPosts(id);

  const commentsPromise = await getPostsComment(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;

  return (
    <div>
      <h1 className="text-3xl font-bold m-4">Post Details</h1>
      <div className="m-4 p-4 border rounded-lg shadow">
        <h2 className="text-xl font-semibold">{post?.title}</h2>
        <p className="mt-2 text-gray-700">{post?.body}</p>
      </div>
      <hr className="my-8" />
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}
