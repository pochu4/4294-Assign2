import React from 'react';
import { useState, useEffect } from 'react';

// Styles from class
import m from './AddModalContent.module.css';
import g from '../global.module.css';

function ModalContent({ onClose, onPokemonAdded }) {

    const [dbTypes, setDbTypes] = useState([]);

    const [types, setTypes] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {

        fetch("http://localhost:3000/types")
            .then((res) => res.json())
            .then((jsonData) => {
                setDbTypes(jsonData);
                if (jsonData.length > 0) {
                    setTypes(jsonData[0].id);
                }

                console.log(jsonData);
            });

    }, []);

    const handleFormSubmit = async (event) => {

        event.preventDefault();

        // console.log(types, name)

        const formData = new FormData();

        formData.append("name", name);
        formData.append("type_id", types);
        formData.append("image", image);
        formData.append("description", description);

        const APIRequest = await fetch("http://localhost:3000/pokemons", {
            method: "POST",
            body: formData,
        });


        const result = await APIRequest.json();

        onClose();

        onPokemonAdded();

        console.log(APIRequest);

    };

    return (

        <div className={m['modal-container']}>

            <div className={`${m["modal"]} ${g["card"]}`}>
                <h4> Add a Pokeman!!!!!!!</h4>
                <form onSubmit={handleFormSubmit} className={g["form-group"]} encType='multipart/form-data' method='POST' action='http://localhost:3000/pokemons'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    <label htmlFor="types">Type:</label>
                    <select
                        id="types"
                        name="types"
                        value={types}
                        onChange={(event) => setTypes(event.target.value)}
                        required
                    >
                        <option value="">Select a type</option>
                        {dbTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="description">Description:</label>
                    <input
                        id="description"
                        name="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                    />

                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        // value={image}
                        onChange={(event) => setImage(event.target.files[0])}
                        required
                    />

                    {/* <button type="submit" className={g["button"]}>
                        Add Pokemon
                    </button> */}

                    <button className="relative h-12 overflow-hidden rounded bg-emerald-500 px-5 py-2.5 text-white transition-all duration-300 hover:bg-emerald-500 hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2" type='submit'><span className="relative">Add Pokemon</span></button>

                </form>

                <button className={m["modal__close-button"]} onClick={onClose}>X</button>
            </div>


        </div>

    );

}

export default ModalContent;

