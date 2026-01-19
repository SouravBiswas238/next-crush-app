export default async function getPosts(id) {
  const results = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return results.json();
}
