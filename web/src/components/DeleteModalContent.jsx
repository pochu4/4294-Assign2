import g from "../global.module.css";
import m from "./AddModalContent.module.css";

function  DeleteModalContent( {pokemon, onClose, onPokemonDeleted } ) {

    const handleDeletePokemon = (event) => {

        event.preventDefault();
        

        fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
            method: "DELETE"
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            onPokemonDeleted();
            onClose();
        })

    }

    return(
        <div className={`${m["modal-container"]}`}>
            <div className={`${m["modal"]} ${g["card"]}`}>
                <h3>Are you sure you want to delete {pokemon.name}</h3>
                <form onSubmit={handleDeletePokemon}>
                    <button 
                        className={`${g["button"]} ${g["delete"]}`}
                        type="submit"
                    >Yes</button>
                </form>
                <button 
                    className={m["modal__close-button"]}
                    onClick={onClose}
                >x</button>
            </div>
        </div>
    )

}

export default DeleteModalContent;