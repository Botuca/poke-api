const getPokemonTable = async (urls) =>
  Promise.all(
    urls.map((url) =>
      fetch(url)
        .then((response) => {
          return response?.json();
        })
        .then((data) => {
          return data || [];
        })
        .catch((error) => {
          console.error("deu ruim", error);
        })
    )
  );

export const getPokemonsTable = async (filter) => {
  const pokemonsURLs = await fetch(filter)
    .then((response) => response?.json())
    .then((data) => data?.results.map((result) => result.url))
    .catch((error) => {
      console.error("deu ruim", error);
    });

  return await getPokemonTable(pokemonsURLs);
};

export const getPokemonSearch = async (pokemonIdentifier) =>
  fetch(pokemonIdentifier)
    .then((response) => {
      return response?.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("deu ruim", error);
    });
