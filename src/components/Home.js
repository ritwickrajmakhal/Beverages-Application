import React, { useEffect, useState } from "react";
import Search from "./Search";
import CocktailList from "./CocktailList";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <Search label={"Search Your Favorite Beverages"} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <section className="section">
          <CocktailList cocktailsData={cocktails} />
        </section>
      )}
    </div>
  );
};

export default Home;
