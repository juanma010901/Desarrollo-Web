const request = require('request');

// 1.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro(“i robot”);
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot

const getBookByName = (bookName) => {
    request.get(`http://openlibrary.org/search.json?q=${bookName}` , function (error, response, body) {
    if(response.statusCode === 200) {
        // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
        const json = JSON.parse(body);
        // console.log(Object.keys(json), json.name)
        console.log(json.docs[0].author_name)
    } else {
        console.log('Error, something went worng', error)
    }
})
}

//getBookByName('casa');

// 2.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//     http://openlibrary.org/search.json?author=asimov

const getBookByAuthor = (bookAuthor) => {
    request.get(`http://openlibrary.org/search.json?q=${bookAuthor}` , function (error, response, body) {
    if(response.statusCode === 200) {
        // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
        const json = JSON.parse(body);
        // console.log(Object.keys(json.docs))
        for (let i = 0; i < json.docs.length; i++){
           console.log(json.docs[i].title)
        }
    } else {
        console.log('Error, something went worng', error)
    }
})
}

//getBookByAuthor('asimov');


// 3.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

// La API no funciona

// 4.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//     https://swapi.co/

const getMovieByAuthor = (character) => {
    request.get(`https://swapi.dev/api/people/?search=${character}` , function (error, response, body) {
    if(response.statusCode === 200) {
        // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
        const json = JSON.parse(body);
        // console.log(json.results[0].films)
        
        for (let i = 0; i < json.results[0].films.length; i++) {
            movieName = json.results[0].films[i] 
            request.get(`${movieName}` , function (error, response, body) {
            if(response.statusCode === 200) {
                // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
                const json = JSON.parse(body);
                // console.log(Object.keys(json))
                console.log(json.title)
            } else {
                console.log('Error, something went worng', error)
            }
            })
        }

    } else {
        console.log('Error, something went worng', error)
    }
})
}

// getMovieByAuthor('Darth Vader');


// 5.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//     https://api.nasa.gov/

let fechaActual = new Date();
let fechaAyer = new Date();
fechaAyer.setDate(fechaActual.getDate() - 1)
let ayer = fechaAyer.toISOString().slice(0,10);
let fecheSemanaAtras = new Date();
fecheSemanaAtras.setDate(fechaActual.getDate() - 7)
let semanaAtras = fecheSemanaAtras.toISOString().slice(0,10);
semanaAtras = toString(semanaAtras)
ayer = toString(ayer)

const getAsteroids = (semanaAtras, ayer) => {
    apikey = "XbHqrAF6SVwaMdHvq4YFeH2JwbxB2JgQuaENAwV1"
    request.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${semanaAtras}&end_date=${ayer}&api_key=${apikey}` , function (error, response, body) {
    if(response.statusCode === 200) {
        // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
        const json = JSON.parse(body);
        console.log(Object.keys(json))
        console.log((json.element_count))
    } else {
        console.log('Error, something went worng', error)
    }
})
}

getAsteroids()


// 6.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//     https://pokeapi.co/