export default async function getAllPosts() {
  const results = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      next: { revalidate: 10 },
    }
  );
  if (!results.ok) {
    throw new Error("Failed to fetch posts");
  }
  return results.json();
}
