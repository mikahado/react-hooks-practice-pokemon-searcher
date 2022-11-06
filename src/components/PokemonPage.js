import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";



function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(setPokemons)
  }, [])

  function handleCardAdd(addPokemon){
    setPokemons([...pokemons, addPokemon])
  }

  const pokemonDisplayed = pokemons.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={handleCardAdd}/>
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm}/>
      <br />
      <PokemonCollection pokemons={pokemonDisplayed}/>
    </Container>
  );
}

export default PokemonPage;
