const button = document.querySelector('button');
const pokemonInput = document.querySelector('input');
const imageDiv = document.querySelector('div');

//pulls all Pokemon and logs to the console
const getPokemon = async () => {
  const pokemonData = await axios.get('https://pokeapi.co/api/v2/pokemon/');
  console.log(pokemonData);
};

getPokemon();

//reads our Input value and makes the interactive API call
button.addEventListener('click', async () => {
  let poke = pokemonInput.value;
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  
  //drilling our data response
  let pokPic = response.data.sprites.front_default;
  
  //setting our DOM image
  imageDiv.innerHTML = `<img src="${pokPic}">`;
});
