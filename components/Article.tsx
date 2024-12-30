import { dataType } from "@/app/blogs/page";
import Image from "next/image";

export default function Article({ title, description, image }: dataType) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
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
        <h2 className="flex p-2">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
