import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    getQuery(e);
    setText(e);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center ">
        <form>
          <input
            className="w-60 px-2 py-1 shadow-sm bg-opacity-30 rounded-sm outline-none bg-gray-300 focus:bg-purple-100 transition-colors duration-200"
            type="text"
            value={text}
            placeholder="Search your favorite cocktails.."
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
