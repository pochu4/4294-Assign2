import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import AddModal from "../components/AddModal";
import UpdateModal from "../components/UpdateModal";
import g from '../global.module.css';

import Filter from "../components/Filter";

function AllPokemon() {

    const [pokemons, setPokemons] = useState([]);

    const getAllPokemons = function () {
        fetch("http://localhost:3000/pokemons")
            .then((res) => res.json())
            .then((jsonData) => {
                setPokemons(jsonData);
                console.log(jsonData);
            });
    }

    useEffect(() => {
        getAllPokemons();
    }, []);



    return (
        <div className="p-8 w-10/12 mx-auto flex justify-between mb-20 gap-8">
            <div className="">

                <AddModal onPokemonAdded={getAllPokemons} />

                <h1 className="text-xl font-bold my-4 mt-10">Filter:</h1>

                <Filter />

                {/* Filter Stuff */}
                {/* <p className="text-gray-600">Filter options will go here.</p> */}


            </div>

            {/* Pokemon Grid */}
            <div className="grid grid-cols-3 gap-6 w-3/4">
                {pokemons.map((pokemon) => (
                    <div
                        key={pokemon.id}
                        className="shadow-2xl rounded-xlg p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-96"
                    >
                        <img
                            src={`http://localhost:3000/images/${pokemon.image_name}`}
                            alt={pokemon.name}
                            className="w-32 h-auto object-cover mb-4"
                        />
                        <div>
                            <h2 className="text-xl font-bold text-center text-gray-800">{pokemon.name}</h2>
                            <p className="text-md text-center text-gray-600 mt-2">{pokemon.type_name}</p>
                        </div>

                        <div className="flex justify-between w-full">
                            <Link to={`/pokemons/${pokemon.id}`} className={`${g["button"]} ${g["small"]} ${g["primary"]} mt-4`}>View</Link>
                            {/* <Link to={`/pokemons/${pokemon.id}`} className="relative h-12 overflow-hidden rounded bg-blue-500 px-5 py-2.5 text-white transition-all duration-300 hover:bg-blue-500 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 text-center">View</Link> */}
                            <UpdateModal onPokemonUpdated={getAllPokemons} pokemon={pokemon} />

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );

}
export default AllPokemon;