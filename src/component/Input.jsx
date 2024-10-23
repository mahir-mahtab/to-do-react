import React from "react";
import { useState } from "react";

const Input = ({ tasklist, setTasklist }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(input !== ""){
    setTasklist([...tasklist, input]);
    setInput("");
    }
  };
  return (
    <>
      <form>
        <div className="flex items-center justify-center gap-0 mb-4">
          <input
            type="text "
            placeholder="Enter your task here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-2 py-1 mr-0 border-2 border-gray-300 rounded-l-md"
          />
          <button
            onClick={handleSubmit}
            className="px-2 py-1 text-white border-2 border-gray-300 bg-sky-500 rounded-r-md"
          >
            <span className="px-1">+</span>ADD
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
