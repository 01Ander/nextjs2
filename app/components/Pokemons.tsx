import Link from "next/link";

export function Pokemons({ data }: { data: DataPokemon }): JSX.Element {
  return (
    <>
      {data.results.map((pokemon: Pokemon) => (
        <article key={pokemon.name}>
          <Link href={`/pokemons/${pokemon.name}`}>
            <div>
              <h2>{pokemon.name}</h2>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
