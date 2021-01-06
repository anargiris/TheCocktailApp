import React from "react";
import CocktailItem from "./CocktailItem";

const CocktailList = ({ cocktails }) => {
  return (
    <div className="max-w-4xl flex flex-wrap sm:gap-10 p-10 mx-auto">
      {cocktails ? (
        cocktails.map((cocktail) => (
          <CocktailItem cocktail={cocktail} key={cocktail.idDrink} />
        ))
      ) : (
        <h1 className="text-center text-2xl">
          There's no such cocktail! Yet...
        </h1>
      )}
    </div>
  );
};

export default CocktailList;
