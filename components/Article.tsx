import Image from "next/image";

export default function Article() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="shadow p-4">
        <div className="relative w-full  aspect-video">
          <Image
            alt="image"
            fill
            src={"/images/curry.jpg"}
            className="object-cover"
          />
        </div>
        <h2 className="flex p-2">title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minima commodi libero! Praesentium illo, nostrum quibusdam dicta,
          blanditiis, quidem aspernatur sequi iste ipsa autem magnam ullam sunt
          repellat et! Iusto?
        </p>
      </div>
      <div className="shadow p-4">
        <div className="relative w-full aspect-video">
          <Image
            fill
            alt="image"
            className="object-cover"
            src={"/images/dumplings.jpg"}
          />
        </div>
        <h2 className="flex p-2">title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minima commodi libero! Praesentium illo, nostrum quibusdam dicta,
          blanditiis, quidem aspernatur sequi iste ipsa autem magnam ullam sunt
          repellat et! Iusto?
        </p>
      </div>
      <div className="shadow p-4">
        <div className="relative w-full aspect-video">
          <Image
            fill
            alt="image"
            className="object-cover"
            src={"/images/macncheese.jpg"}
          />
        </div>
        <h2 className="flex p-2">title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minima commodi libero! Praesentium illo, nostrum quibusdam dicta,
          blanditiis, quidem aspernatur sequi iste ipsa autem magnam ullam sunt
          repellat et! Iusto?
        </p>
      </div>
      <div className="shadow p-4">
        <div className="relative w-full aspect-video">
          <Image
            fill
            alt="image"
            className="object-cover"
            src={"/images/tomato-salad.jpg"}
          />
        </div>
        <h2 className="flex p-2">title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minima commodi libero! Praesentium illo, nostrum quibusdam dicta,
          blanditiis, quidem aspernatur sequi iste ipsa autem magnam ullam sunt
          repellat et! Iusto?
        </p>
      </div>
      <div className="shadow p-4">
        <div className="relative w-full aspect-video">
          <Image
            fill
            alt="image"
            className="object-cover"
            src={"/images/pizza.jpg"}
          />
        </div>
        <h2 className="flex p-2">title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minima commodi libero! Praesentium illo, nostrum quibusdam dicta,
          blanditiis, quidem aspernatur sequi iste ipsa autem magnam ullam sunt
          repellat et! Iusto?
        </p>
      </div>
      <div className="shadow p-4">
        <div className="relative w-full aspect-video">
          <Image
            fill
            alt="image"
            className="object-cover"
            src={"/images/schnitzel.jpg"}
          />
        </div>
        <h2 className="flex p-2">title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minima commodi libero! Praesentium illo, nostrum quibusdam dicta,
          blanditiis, quidem aspernatur sequi iste ipsa autem magnam ullam sunt
          repellat et! Iusto?
        </p>
      </div>
    </div>
  );
}
