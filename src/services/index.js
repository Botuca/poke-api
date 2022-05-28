const pokeApiURL = (filter) => {
  return `https://pokeapi.co/api/v2/${filter}`;
};
export const getPokemons = (filter) =>
  fetch(pokeApiURL(filter))
    .then((response) => {
      return response?.json();
    })
    .then((data) => {
      return data?.results;
    })
    .catch((error) => {
      window.alert(error);
      console.error("deu ruim", error);
    });
