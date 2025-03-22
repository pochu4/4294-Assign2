import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import ModalContent from './AddModalContent';
import g from '../global.module.css';


function AddModal( { onPokemonAdded }) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* <button className={g['button']} onClick={() => setShowModal(true)}>Add Pokemon</button> */}
            <button className="relative h-12 overflow-hidden rounded bg-emerald-500 px-5 py-2.5 text-white transition-all duration-300 hover:bg-emerald-500 hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2" onClick={() => setShowModal(true)}><span class="relative">Add Pokemon</span></button>

            {showModal && createPortal(<ModalContent onPokemonAdded={onPokemonAdded} onClose={ () => { setShowModal(false)}} />, document.body)}
            
        </>
    )
}

export default AddModal;