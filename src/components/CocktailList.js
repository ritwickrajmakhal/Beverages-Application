import React from "react";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ cocktailsData }) => {
  const cocktails = cocktailsData?.map((cocktail) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
      cocktail;
    return (
      <CocktailCard
        key={idDrink}
        id={idDrink}
        name={strDrink}
        image={strDrinkThumb}
        type={strAlcoholic}
        glass={strGlass}
      />
    );
  });
  return <div className="cocktails-center row">{cocktails}</div>;
};

export default CocktailList;
