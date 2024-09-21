import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import preLoader from "../preLoader.svg";
import ErrorPage from "./ErrorPage";

const CocktailDetails = () => {
  const { id } = useParams(); // Get the cocktail id from the URL params
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCocktail = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setCocktail(data.drinks[0]); // The API returns the cocktail inside an array
      } catch (error) {
        console.error("Error fetching cocktail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  if (loading) {
    return (
      <img src={preLoader} alt="loading" className="loader d-block mx-auto my-5" />
    );
  }

  if (!cocktail) {
    return <ErrorPage msg={"No cocktail to display"}/>;
  }

  // Collect ingredients
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    } else {
      break;
    }
  }

  return (
    <section className="cocktail container my-5">
      <div className="d-flex justify-content-center">
        <Link className="btn btn-primary btn-sm rounded-5" to="/">
          BACK HOME
        </Link>
      </div>

      <h2 className="my-4 text-center text-uppercase">{cocktail.strDrink}</h2>
      <div className="row">
        {/* Image Column */}
        <div className="drink col-md-5 mb-4 mb-md-0">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="img-fluid rounded-5 shadow"
          />
        </div>

        {/* Details Column */}
        <div className="col-md-7 d-flex flex-column justify-content-around">
          <p className="section-title">
            <strong>Name:</strong> {cocktail.strDrink}
          </p>
          <p>
            <strong>Category:</strong> {cocktail.strCategory}
          </p>
          <p className="drink-info">
            <strong>Info:</strong> {cocktail.strAlcoholic}
          </p>
          <p>
            <strong>Glass:</strong> {cocktail.strGlass}
          </p>
          <p>
            <strong>Instructions:</strong> {cocktail.strInstructions}
          </p>
          <p>
            <strong>Ingredients:</strong> {ingredients.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CocktailDetails;
