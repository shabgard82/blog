import Link from "next/link";

export default function Navbar() {
  return (
    <div className="shadow p-4 flex justify-around">
      <Link href="/">Home</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/blogs/add">Add</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/">Home</Link>
      <Link href="/blogs">Blogs</Link>
    </div>
  );
}
