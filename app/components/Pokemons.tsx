export function Pokemons({ data }: { data: DataPokemon }):JSX.Element {
  return (
    <>
      {data.results.map((pokemon: Pokemon) => (
        <div key={pokemon.name}>
          <h2>{pokemon.name}</h2>
        </div>
      ))}
    </>
  );
}
