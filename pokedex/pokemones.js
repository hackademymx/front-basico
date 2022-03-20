const apiPokemon = "https://pokeapi.co/api/v2/pokemon?limit=10";
const getPokemon = () => {
  // Variable para la info del pokemon
  let data = {};
  //   Hacemos fetch a la url del pokemon
  fetch(apiPokemon)
    //  Convertimos la respuesta en json
    .then((response) => response.json())
    // Guardamos la info en la variable data
    .then((response) => {
      data = response.results;
      data.forEach((pokemon) => {
        //   Hacemos fetch a la url del pokemon
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((response) => {
            // Creamos un div para el pokemon
            const newPokemon = document.createElement("div");
            newPokemon.className = "pokemon__card";
            //   Le agregamos contenido con innerHTML
            newPokemon.innerHTML = `
            <span>
                <strong>Nombre: </strong>${response.name}
            </span>
            <img src="${response.sprites.front_default}" alt="${response.name}">
            <p>Peso: ${response.weight}</p>
            <p>Altura: ${response.height}</p>
            <p>Tipo: ${response.types[0].type.name}</p>
            <p>Experiencia  base: ${response.base_experience}</p>
        `;
            // Agregamos el pokemon a su caja principal
            document.getElementById("pokemon__group").appendChild(newPokemon);
          });
      });
    });

  return;
};

document.addEventListener("load", getPokemon(1));
