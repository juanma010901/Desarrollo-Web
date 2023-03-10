

const request = require ('request');

request.get("https://pokeapi.co/api/v2/pokemon/pikachu", function(error, response, body) {
    if(response.statusCode === 200) {
        const json = JSON.parse(body)
        console.log(json.abilities)
    } else {
        console.log('Error, algo va mal')
    }
})