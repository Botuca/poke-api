const pokeApiURL = (filter) => {
  return `https://pokeapi.co/api/v2/${filter}`;
};

const getPokemonTable = async (urls) =>
  Promise.all(
    urls.map((url) =>
      fetch(url)
        .then((response) => {
          return response?.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          window.alert(error);
          console.error("deu ruim", error);
        })
    )
  );

export const getPokemonsTable = async (filter) => {
  const pokemonsURLs = await fetch(pokeApiURL(filter))
    .then((response) => response?.json())
    .then((data) => data?.results.map((result) => result.url))
    .catch((error) => {
      window.alert(error);
      console.error("deu ruim", error);
    });

  return await getPokemonTable(pokemonsURLs);
};
