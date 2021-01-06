import React from "react";

const CocktailItem = ({ cocktail }) => {
  return (
    <div className="bg-transparent w-60 h-60 mx-auto sm:mb-0 mb-5 cursor-pointer rounded-md transform-gpu hover:rotate-180 duration-500 shadow-md">
      <div className="relative w-full h-full text-center rounded-md">
        <div className="w-60 h-60 absolute shadow-sm rounded-md overflow-hidden transition-opacity ease-out hover:opacity-0 duration-1000 z-10">
          <img
            src={cocktail.strDrinkThumb}
            alt=""
            className="absolute object-contain z-0 w-60 h-60 "
          />
          <h1 className="z-10 text-2xl text-white absolute bottom-0 right-0 bg-purple-900 bg-opacity-40 rounded-lg p-1">
            <strong>{cocktail.strDrink}</strong>
          </h1>
        </div>
        <div
          className="w-60 h-60 absolute opacity-0 font-yanone overflow-hidden transform-gpu rotate-180 shadow-sm rounded-md
        hover:opacity-100 z-20 bg-purple-300 transition-all duration-500"
        >
          <h1 className="bg-purple-600 text-2xl font-bold shadow-sm leading-relaxed p-1">
            {cocktail.strDrink}
          </h1>
          <h3 className="text-xl border-b border-purple-400 shadow-sm">
            Glass: {cocktail.strGlass}
          </h3>
          <h3 className="text-lg text-gray-900">
            {cocktail.strIngredient1
              ? cocktail.strMeasure1
                ? cocktail.strIngredient1 + ", " + cocktail.strMeasure1
                : cocktail.strIngredient1
              : ""}
          </h3>
          <h3 className="text-lg text-gray-900">
            {cocktail.strIngredient2
              ? cocktail.strMeasure2
                ? cocktail.strIngredient2 + ", " + cocktail.strMeasure2
                : ""
              : ""}
          </h3>
          <h3 className="text-lg text-gray-900">
            {cocktail.strIngredient3
              ? cocktail.strMeasure3
                ? cocktail.strIngredient3 + ", " + cocktail.strMeasure3
                : ""
              : ""}
          </h3>
          <h3 className="text-lg text-gray-900">
            {cocktail.strIngredient4
              ? cocktail.strMeasure4
                ? cocktail.strIngredient4 + ", " + cocktail.strMeasure4
                : ""
              : ""}
          </h3>
          <h3 className="text-lg text-gray-900">
            {cocktail.strIngredient5
              ? cocktail.strMeasure5
                ? cocktail.strIngredient5 + ", " + cocktail.strMeasure5
                : ""
              : ""}
          </h3>
          <h3 className="text-lg text-gray-900">
            {cocktail.strIngredient6
              ? cocktail.strMeasure6
                ? cocktail.strIngredient6 + ", " + cocktail.strMeasure6
                : ""
              : ""}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CocktailItem;
