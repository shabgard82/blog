import { dataType } from "@/app/blogs/page";
import Image from "next/image";

export default function Article({ title, description, image, cost }: dataType) {
  return (
    <div className="shadow p-4">
      <div className="relative w-full aspect-video">
        {image && image !== "" ? (
          <Image alt="image" fill src={image} className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <span>No image available</span>
          </div>
        )}
      </div>
      <div className="flex p-2 font-bold justify-around items-between">
        <h2>{title}</h2>
        <h3 className="font-bold">{cost}</h3>
      </div>
      <p className="text-center">{description}</p>
    </div>
  );
}
