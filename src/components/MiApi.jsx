import { useState, useEffect } from "react"
import CardCharacter from './CardCharacter'
import SearchBar from "./SearchBar"



function MiApi() {

    //Estados
    const [db, setData] = useState([])
    const [search, setSearch] = useState('')

    //Funcion Async para hacer call de Api
    const getData = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        setData(data.results)
    }
    //Hook de efecto, con arreglo vacío
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <SearchBar setSearch={setSearch} />
            <section className="container section py-4">

                {db.filter((item) => item.name.includes(search)).map((item) => {

                    return (
                        <CardCharacter key={item.id} item={item} />
                    )
                })}
            </section>
        </>




    )
}

export default MiApi