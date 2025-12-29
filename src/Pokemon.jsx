import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const api = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=100";

    const getPokemon = async () => {
        try {
            const res = await fetch(api);
            const data = await res.json();
            //    console.log(data);

            const fetchSinglePokemon = data.results.map(async (curElem) => {
                const res = await fetch(curElem.url);
                const data = await res.json();
                console.log(data);
                return data;
            }
            );

            const allresponse = await Promise.all(fetchSinglePokemon);
            console.log(allresponse);
            setPokemon(allresponse);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getPokemon();
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="pokeball"></div>
                <p className="loading-text">Catching Pokémon...</p>
            </div>
        );
    }

    const searchElements = pokemon.filter((curPokemon) =>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );

if (error) {
    return (
        <div>
            <h1>{error.message}</h1>
        </div>
    );
}

return (
    <>
        <section className='container'>
            <header>
                <h1>Lets Catch Pokémon</h1>
            </header>
            <div className="pokemon-search">
                <input
                    type="text"
                    placeholder="search Pokemon"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <ul className="cards">
                {
                    searchElements.map((curPokemon) => {
                        return <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
                    })
                }
            </ul>
        </section>
    </>
)
}

export default Pokemon
