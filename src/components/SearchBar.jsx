import React from "react";

const SearchBar = ({setSearch}) =>{

    return(
        <div className="d-flex justify-content-between px-4 py-2 bg-dark">
            <label className="text-white h3" htmlFor="Buscador" >Buscador</label>
            <input className="form-control inputSearch" name="Buscador" placeholder="...búsqueda por nombre" type="text" onChange={e => setSearch(e.target.value)} />

        </div>
    )
}

export default SearchBar