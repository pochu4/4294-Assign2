import React from "react";
import { useState, useEffect } from "react";

function AllPokemon() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/pokemons")
            .then((res) => res.json())
            .then((jsonData) => {
                setPokemons(jsonData);
                console.log(jsonData);
            });
    }, []);



    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Pokemon</h1>
            <div className="grid grid-cols-3 gap-4">
                {pokemons.map(pokemon => {

                    return (
                        <div key={pokemon.id} className="bg-gray-100 p-4 rounded-lg">
                            <img src={`http://localhost:3000/images/${pokemon.image_name}`} alt={pokemon.name} className="mx-auto" />
                            <h2 className="text-xl font-bold">{pokemon.name}</h2>
                            <p className="text-lg">{pokemon.type_name}</p>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    );

}
export default AllPokemon;