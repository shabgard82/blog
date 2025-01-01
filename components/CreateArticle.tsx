"use client";

import { useState } from "react";

export default function CreateArticle() {
  const [id, setId] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleCreateArticle = () => {
    fetch("http://localhost:5000/articles", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        cost: cost,
        title: title,
        description: description,
        image: `/images/${image}`,
      }),
    });
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gray-400 h-screen w-full scroll-auto">
      <div className="pt-4 lg:pt-8">
        <h1 className="font-bold text-[20px] text-white">
          Add New Food to Menu
        </h1>
      </div>
      <div className=" flex flex-col justify-between lg:h-auto h-screen">
        <div className="flex flex-col items-center space-y-4 w-full px-4 py-4">
          <label htmlFor="title" className="self-start">
            ID
          </label>
          <input
            id="id"
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full rounded-sm border border-gray-300 px-2 py-1"
          />
          <label htmlFor="title" className="self-start">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-sm border border-gray-300 px-2 py-1"
          />
          <label htmlFor="description" className="self-start">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-sm border border-gray-300 px-2 py-1"
          ></textarea>
          <label htmlFor="title" className="self-start">
            cost
          </label>
          <input
            id="cost"
            type="text"
            name="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full rounded-sm border border-gray-300 px-2 py-1"
          />
          <label htmlFor="image" className="self-start">
            Upload Image
          </label>
          <input
            id="image"
            type="file"
            name="image"
            className="w-full mb-10"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0].name);
              } else {
                setImage("");
              }
            }}
          />
        </div>

        <button
          onClick={handleCreateArticle}
          className="w-full mb-4 py-4 border-2 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 lg:mt-4"
        >
          ADD Food
        </button>
      </div>
    </div>
  );
}
