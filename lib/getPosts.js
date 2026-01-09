export default async function getPosts(id) {
  const results = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
  return results.json();
}
