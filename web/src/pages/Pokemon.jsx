import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 

function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch Pokémon data from the API
    fetch(`http://localhost:3000/pokemons/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Pokémon:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  return (
    <div className="p-8 w-8/12 mx-auto bg-white shadow-lg rounded-lg mt-24">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back
      </button>

      <div className="flex justify-between items-center my-8 gap-48">
        <img
          src={`http://localhost:3000/images/${pokemon.image_name}`}
          alt={pokemon.name}
          className="w-64 h-auto mx-auto mb-4"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{pokemon.name}</h1>
          <p className="text-gray-600 mb-4">{pokemon.type_name}</p>
          <p className="text-gray-800">{pokemon.description}</p>
        </div>
      </div>


    </div>
  );
}

export default Pokemon;