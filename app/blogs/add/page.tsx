import Container from "@/components/Container";

export default function AddFoodToMenue() {
  return (
    <div className="flex flex-col px-4 bg-slate-400">
      <div className="flex flex-col">
        <label htmlFor="title">Image</label>
        <input type="text" id="title" name="name" />
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="name" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="name" />
      </div>
    </div>
  );
}
