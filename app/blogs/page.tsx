import Article from "@/components/Article";
import Container from "@/components/Container";

export interface dataType {
  id?: number;
  description: string;
  title: string;
  image: string;
}

export default async function Blogs() {
  const resault = await fetch("http://localhost:5000/articles");
  const data = (await resault.json()) as dataType[];

  return (
    <Container className="bg-slate-50 mt-4">
      {data.map((item) => (
        <div key={item.id}>
          <Article
            title={item.title}
            description={item.description}
            image={item.image}
          />
        </div>
      ))}
    </Container>
  );
}
