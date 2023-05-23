import { Pokemons } from "./components/Pokemons";

async function getData() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <h1>My page</h1>
      <Pokemons data={data} />
    </main>
  );
}
