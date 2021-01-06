import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import CocktailList from "./components/cocktails/CocktailList";
import axios from "axios";
import Search from "./components/layout/Search";
const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [query, setQuery] = useState("martini");
  const baseURL =
    "https://cors-anywhere.herokuapp.com/http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    const getCocktails = async () => {
      const result = await axios.get(`${baseURL}${query}`);

      setCocktails(result.data.drinks);
    };
    getCocktails();
  }, [query]);

  return (
    <div className="w-full h-full bg-purple-100 bg-opacity-50">
      <Navbar />
      <div className="flex justify-around">
        <Search getQuery={(e) => setQuery(e)} />
      </div>
      <CocktailList cocktails={cocktails} />
    </div>
  );
};

export default App;
