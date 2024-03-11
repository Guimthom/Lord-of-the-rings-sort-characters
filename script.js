const movieName = document.getElementById("movie");
const typeOfMovie = document.getElementById("type");
const yearProduction = document.getElementById("year");
const directorMovie = document.getElementById("director");
const charactersCards = document.getElementById("characters-cards");
const charactersDropdownList = document.getElementById("characters");

const charactersMovie = 
{
    movie : "Lord of the rings trilogy",
    type: "Fantasy",
    year: "2001/2002/2003",
    isOscarsWinner: true,
    director : {
        directorName : "Peter Jackson",
        movies : 3,
    },
    characters : [
     {
        name: "Aragorn",
        race: "human",
        age: 87,
        isDead: false,
        ring: "Barahir",
    },
    {
        name: "Frodo Baggins",
        race: "hobbit",
        age: 33,
        isDead: false,
        ring: "The One",
    },
    {
      name: "Gandalf",
      race: "maiar",
      age: 9000,
      isDead: false,
      ring: "Narya",
  },
    {
      name: "Boromir",
      race: "human",
      age: 41,
      isDead: true,
      ring: null,
  },
],
};

Object.freeze(charactersMovie);

/*const sport = myFavoriteFootballTeam.sport;
const team = myFavoriteFootballTeam.team;*/
// Refacto object destructuring syntax. Dans le principe, créer une variable pour chaque param
const {type, movie, year, characters} = charactersMovie;
const {directorName} = charactersMovie.director;

typeOfMovie.textContent = type;
movieName.textContent = movie;
yearProduction.textContent = year;
directorMovie.textContent = directorName;

const setCharactersCards = (arr = characters) =>{
charactersCards.innerHTML += arr.map(({name, race, age, isDead, ring}) =>
    `<div class="character-card">
        <h2>${name} ${isDead ? "(Dead)" : ""}</h2>
        <p>Race: ${race}</p>
        <p>Age: ${age}</p>
        <p>Ring: ${ring ? ring : "No ring"}</p>
    </div>`
).join("");
};

charactersDropdownList.addEventListener("change", (e) =>{
    charactersCards.innerHTML = "";
    switch(e.target.value){
        case "dead" :
          setCharactersCards(characters.filter( (character) => character.isDead !== false));
        break;
        case "dwarf" :
          setCharactersCards(characters.filter( (character) => character.race === "dwarf"));
        break;
        case "hobbit" :
          setCharactersCards(characters.filter( (character) => character.race === "hobbit"));
        break;
        case "elve" :
          setCharactersCards(characters.filter( (character) => character.race === "elve"));
        break;
        case "human" :
          setCharactersCards(characters.filter( (character) => character.race === "human"));
        break;
        case "orc" :
          setCharactersCards(characters.filter( (character) => character.race === "orc"));
        break;
        case "maiar" :
          setCharactersCards(characters.filter( (character) => character.race === "maiar"));
        break;
        default : setCharactersCards();
    };
});