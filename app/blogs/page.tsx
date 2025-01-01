import Article from "@/components/Article";
import Container from "@/components/Container";
import Link from "next/link";

export interface dataType {
  id?: number;
  description: string;
  title: string;
  image: string;
  cost: string;
}

export default async function Blogs() {
  const resault = await fetch("http://localhost:5000/articles");
  const data = (await resault.json()) as dataType[];
  console.log(data, "hhggh");

  return (
    <Container className="bg-slate-50 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <Article {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}
