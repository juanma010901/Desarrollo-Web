
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    const contenedorTarjetas = document.querySelector(".repositorio-tarjetas");

    data.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {

          // console.log(pokemonData);`
          // Creación de la tarjeta para cada Pokemon
          const tarjeta = document.createElement("div");
          tarjeta.classList.add("tarjeta");

          // Petición de la imagen desde la API y creacion de elemntos de imagen
          const imageUrl = pokemonData.sprites.front_default;
          const img = document.createElement("img");
          img.classList.add("img");
          img.src = imageUrl;

          // Búsqueda del nombre del Pokemon actual
          // console.log(pokemonData.name);
          const pokemonName = pokemonData.name;
          let mayusName = pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1);
          // console.log(mayusName);
          tarjeta.innerHTML = `<h2 class="nombre">${mayusName}</h2>`;
          // title = document.createElement("h1");
          // title.textContent(mayusName);
          // tarjeta.appendChild(title);

          // Creación del contenedor de tipos
          let types = document.createElement("div");
          types.classList.add("types");
          pokemonData.types.forEach((tipo) => {
            // console.log(tipo.type.name);
            let type = document.createElement("p");
            type.textContent = tipo.type.name;
            types.appendChild(type);
            // types.innerHTML = `<h3 class="type">${type.type.name}</h3>`;
          });

          // Agregar los elementos creados a los contenedores padres y las tarjetas al contenedor de tarjetas
          tarjeta.appendChild(img);
          tarjeta.appendChild(types);
          contenedorTarjetas.appendChild(tarjeta);

        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));


  function buscar(){
    let name = document.getElementById("name").value
    console.log(name)
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => {
      data.results.find((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemonData) => {
            if(name === pokemonData.name){
              console.log("Si hay un pokemon con ese nombre");
            }
          })
          .catch((error) => console.error(error));
      });
    })
    .catch((error) => console.error(error));
  }