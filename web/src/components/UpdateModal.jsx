import React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import UpdateModalContent from "./UpdateModalContent";

import g from "../global.module.css";

function UpdateModal({ onPokemonUpdated, pokemon }) {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log(pokemon);
    }, []);

    return (
        <>

            <button
                className={`${g["button"]} ${g["small"]} ${g["warning"]}`}
                onClick={() => { setShowModal(true) }}
            >Edit</button>

            {showModal && createPortal(<UpdateModalContent onClose={() => { setShowModal(false) }} pokemon={pokemon} onPokemonUpdated={onPokemonUpdated} />, document.body)}

        </>
    );

}

export default UpdateModal