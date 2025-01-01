import Image from "next/image";
import { dataType } from "../page";

interface BlogDetailParams {
  params: Promise<{ id: string }>;
//   searchParams: Promise<{}>;
}

export default async function BlogDetail({ params }: BlogDetailParams) {
  const { id } = await params;
  const resault = await fetch(`http://localhost:5000/articles/${id}`);
  const data = (await resault.json()) as dataType;
  return (
    <div className="flex flex-col justify-center  items-center w-full px-10 py-10">
      <div className="relative w-full lg:max-w-4xl aspect-video flex justify-center">
        <Image src={data?.image} alt={data?.title} fill />
      </div>
      <h1 className="text-[20px] font-bold pt-5">{data?.title}</h1>
      <h2>{data?.cost}</h2>
      <p className="w-2/4">{data?.description}</p>
    </div>
  );
}
