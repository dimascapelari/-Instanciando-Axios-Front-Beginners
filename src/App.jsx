import { useState, useEffect } from "react";
import { axiosInstance } from "./helper/axios-instance";
import "./App.css";
import { useAxios } from "./hook/useAxios";

function App() {
  const [pokemonList, loading, error] = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    url: "pokemon",
  });

  const [pokedex, loadingPokedex, errorPokedex] = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    url: "pokedex",
  });

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      Front Beginners
      <div>
        {pokemonList.results.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
      <hr />
      <div>
        {pokedex.results.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
