import { useState, useEffect } from "react";

import g from "../global.module.css";
import m from "./AddModalContent.module.css";

function UpdateModalContent({ onClose, pokemon, onPokemonUpdated }) {

    const [type, setType] = useState(pokemon.type_id);
    const [dbPokemon, setDbPokemon] = useState([]);
    const [name, setName] = useState(pokemon.name);
    const [description, setDescription] = useState(pokemon.description);
    const [image, setImage] = useState(null);

    const handleFormSubmit = async (event) => {

        event.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("type_id", type);
        formData.append("image", image);
        formData.append("description", description);

        const response = await fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
            method: "PUT",
            body: formData
        });

        onPokemonUpdated();
        onClose();

    };

    useEffect(() => {
        fetch("http://localhost:3000/types")
            .then((res) => res.json())
            .then((data) => {
                setDbPokemon(data);

                if (data.length > 0 && !type) {
                    setType(data[0].id);
                }
            })
    }, []);

    return (

        <div className={m["modal-container"]}>

            <div className="border p-8 max-w-[900px] mx-auto bg-white rounded-lg relative w-full">
                <h2>Update Pokemon</h2>
                <form action="" className={`${g['form-group']} ${g['grid-container']}`} onSubmit={handleFormSubmit} encType="multipart/form-data">

                    <div className={g['col-4']}>
                        <label>Current Image</label>
                        <img src={`http://localhost:3000/images/${pokemon.image_name}`} alt="Placeholder" />
                        <label htmlFor="image">Upload New Image</label>
                        <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />

                    </div>

                    <div className={g['col-8']}>

                        <div className="flex justify-between">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="name">Type</label>
                                <select name="type_id" id="type_id" value={type} onChange={(e) => setType(e.target.value)}>
                                    {dbPokemon.map((type) => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-96 p-2 border rounded" // Full width, height of 10rem, padding, border, and rounded corners
                        ></textarea>

                    </div>

                    <div className={g['col-12']}>
                        <button className={`${g['button']} ${g['success']}`} type="submit">Save</button>
                    </div>
                </form>
                <button className={m["modal__close-button"]} onClick={onClose}>x</button>
            </div>

        </div>

    )

};

export default UpdateModalContent;