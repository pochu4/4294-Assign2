import {  useState, useEffect } from "react";

import g from "../global.module.css";

function Filter() {

    const [types, setTypes] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/types")
            .then((res) => res.json())
            .then((jsonData) => {
                // console.log(jsonData);
                setTypes(jsonData);
            });
    }, []);

    const handleFilterSubmit = (event) => {

        event.preventDefault();

        const filterFormData = new FormData(event.target);
        const selectedTypes = filterFormData.getAll("types");

        const queryStringArray = selectedTypes.map( (id) => `types=${id}`);
        const queryString = queryStringArray.join("&")

        console.log(queryString);

        fetch(`http://localhost:3000/types?${queryString}`)
        .then( (res) => res.json()  )
        .then( (data) => {
            console.log(data);
        })

    }

    return(
        <div>
            <form onSubmit={handleFilterSubmit}>
                <div  className={g['form-group']}>
                    <h2>Type</h2>
                    {types.map(type => {
                        return (
                            <label key={type.id}>
                                <input type="checkbox" name="types" value={type.id}/>
                                {type.name}
                            </label>
                        );
                    })}
                    <input type="submit"  value="Apply" className={g['button']} />
                </div>
            </form>
        </div>
    );

}

export default Filter;