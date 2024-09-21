import React, { useEffect, useState } from "react";
import Search from "./Search";
import CocktailList from "./CocktailList";
import preLoader from "../preLoader.svg";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (searchValue) => {
    setLoading(true);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <Search
        handleSearch={handleSearch}
        label={"Search Your Favorite Beverages"}
      />
      {loading ? (
        <img src={preLoader} alt="loading" className="loader d-block mx-auto my-5" />
      ) : (
        <section className="section">
          <h1 className="text-center my-5">Cocktails</h1>
          {cocktails ? (
            <CocktailList cocktailsData={cocktails} />
          ) : (
            <ErrorPage msg={"No cocktails to display"} />
          )}
        </section>
      )}
    </div>
  );
};

export default Home;
