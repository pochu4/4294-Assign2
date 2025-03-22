import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import ModalContent from './AddModalContent';
import g from '../global.module.css';


function AddModal( { onPokemonAdded }) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className={g['button']} onClick={() => setShowModal(true)}>Add Pokemon</button>

            {showModal && createPortal(<ModalContent onPokemonAdded={onPokemonAdded} onClose={ () => { setShowModal(false)}} />, document.body)}
            
        </>
    )
}

export default AddModal;