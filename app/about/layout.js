import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div className="mx-10">
      <nav className="m-5">
        {" "}
        <ul
          className="flex gap-4 mb-4"
          style={{ listStyleType: "none", padding: 0 }}
        >
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
