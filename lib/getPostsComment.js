export default async function getPostsComment(postId) {
  const results = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  if (!results.ok) {
    throw new Error("Failed to fetch post comments");
  }

  return results.json();
}
