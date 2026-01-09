import getPosts from "@/lib/getPosts";

export default async function SinglePost({ params }) {
  const { id } = await params;
  const post = await getPosts(id);

  console.log("post", id);

  return (
    <div>
      <h1 className="text-3xl font-bold m-4">Post Details</h1>
      <div className="m-4 p-4 border rounded-lg shadow">
        <h2 className="text-xl font-semibold">{post?.title}</h2>
        <p className="mt-2 text-gray-700">{post?.body}</p>
      </div>
    </div>
  );
}
