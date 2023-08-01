import "./styles.css";
import { useEffect, useState } from "react";
import { getData } from "./util";
import { getPokemonList } from "./getters";
import { Card } from "./components/Card";

export default function App() {
  // Defined temp needs to move out and to seprate components
  const API_URI = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonList(API_URI).then((reponse) => {
      const pokemonPromiseArr = reponse.results.map((poke) =>
        getData(poke.url)
      );
      Promise.all(pokemonPromiseArr).then((pokemons) => {
        setPokemons(pokemons);
      });
    });
  }, []);

  return (
    <div className="App">
      <h1>This Sample demonstrates card view for page</h1>
      <div className="container">
        {pokemons.map((poke) => (
          <Card {...poke} key={poke.id}></Card>
        ))}
      </div>
    </div>
  );
}
