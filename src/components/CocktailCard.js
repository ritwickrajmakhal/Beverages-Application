import React from 'react';
import { Link } from 'react-router-dom';

const CocktailCard = ({ image, name, type, glass, id }) => {
  return (
    <div className="col-md-6 col-lg-4 col-sm-12 mb-4"> {/* Use Bootstrap's grid system for responsiveness */}
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={name} style={{ objectFit: 'cover', height: '200px' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{glass}</h6>
          <p className="card-text">{type}</p>
          <Link to={`/cocktail/${id}`} className="btn btn-primary mt-auto">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
