import React, { useState } from "react";
import "./ModalFolder.css";

function ModalFolder() {
  const [addCategory, setAddCategory] = useState({
    nameCategory: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "color") {
      setAddCategory((prev) => ({ ...prev, [name]: value }));
    } else {
      setAddCategory((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Categoria" ${addCategory.nameCategory}`);
    console.log(`Color: ${addCategory.color}`);
  };

  return (
    <section className="h-380 w-screen bg-222ab flex items-center justify-center">
      <div className="relative m-auto w-380 h-84 bg-222 rounded-2xl">
        <h2 className="text-slate-100 text-2xl p-7 pb-4 pt-6 font-semibold">
          Add Category
        </h2>
        <span className="absolute top-8 right-7 scale-150 text-slate-300 hover:text-slate-400 pl-1 pr-1 rounded-md cursor-pointer">
          🗙
        </span>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="nameCategory"
              className="text-gray-300 opacity-40 pl-7 text-sm pb-2"
            >
              Name
            </label>
            <input
              className="text-xl text-slate-300 opacity-15 ml-7 mr-7 h-8 outline-none border-b border-slate-100 bg-222"
              type="text"
              placeholder="Category"
              name="nameCategory"
              id="nameCategory"
              value={addCategory.nameCategory}
              onChange={handleChange}
            />
          </div>
          <label className="text-gray-300 opacity-40 pl-7 text-sm">Color</label>
          <div className="ml-7 mr-7 mt-3 m-auto flex">
            {[
              ["colorRed", "red", "bg-red"],
              ["colorBlue", "blue", "bg-blue"],
              ["colorGreen", "green", "bg-green"],
              ["colorOrange", "orange", "bg-orange"],
              ["colorViolet", "violet", "bg-violet"],
            ].map(([id, value, color]) => (
              <div className="grid place-items-center pr-4 mb-6">
                <input
                  type="radio"
                  id={id}
                  name="color"
                  value={value}
                  onChange={handleChange}
                  checked={addCategory.color === value}
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor={id}
                  className={`flex items-center justify-center w-9 h-9 
                      duration-300 ${color} rounded-full cursor-pointer
                    text-neutral-50 peer-checked:border-none hover:scale-125 
                    peer-checked:${color} peer-checked:after:content-['✓']`}
                ></label>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mb-5">
            <button className="font-semibold text-slate-300 rounded-20 hover:bg-cyan-700 transition p-3 w-36 grid place-items-center">
              Cancel
            </button>
            <button className="font-semibold text-slate-300 rounded-20 hover:bg-cyan-700 transition p-3 w-36 grid place-items-center">
              Done
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ModalFolder;
