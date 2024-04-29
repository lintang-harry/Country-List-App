import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  flags,
  name,
  population,
  region,
  capital,
  currencies,
}) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="bg-black hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden">
        <div className="card-image">
    <img 
      src={flags.svg} 
      alt="" 
      className="md:h-72 w-full object-cover" 
      style={{ maxHeight: "2500px", overflow: "hidden" }}
    />
</div>


          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              {name.common}
            </h2>
            <ul className="flex flex-col items-start justify-start gap-2 dark:text-gray-400">
              <li>Population: {population.toLocaleString()}</li>
              <li>Capital: {capital}</li>
              {currencies && (
                <li>Currencies: {Object.keys(currencies).map((currency) => (
                  <span key={currency}>
                    {currencies[currency].name} ({currencies[currency].symbol})
                  </span>
                ))}</li>
              )}
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}