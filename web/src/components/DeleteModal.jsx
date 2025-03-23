import React from 'react';
import { useState } from "react";
import { createPortal } from "react-dom";

import DeleteModalContent from "./DeleteModalContent"

import g from "../global.module.css";

function DeleteModal( {pokemon, onPokemonDeleted} ) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className={`${g["button"]} ${g["small"]} ${g["delete"]}`} onClick={ () => { setShowModal(true) } }>
                Delete
            </button>

            {showModal && createPortal(
            <DeleteModalContent 
                pokemon={pokemon}
                onPokemonDeleted={onPokemonDeleted}
                onClose={ () => { setShowModal( false ) }} 
            />, 
            document.body)}
        </>
    )

}

export default DeleteModal;