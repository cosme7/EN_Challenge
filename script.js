//* Crie 3 variáveis, cada uma com um array:
// - Comedy
// - Action
// - Fantasy 
//* Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// - title:
// - director:
// - year: 

let comedy = [
    {
        title: "Click",
        director: "Frank Coraci",
        year: 2006
    }, 
    {
        title: "American Pie 3",
        director: "Jesse Dylan",
        year: 2003
    }, 
    {
        title: "Scary Movie",
        director: "Keenen Ivory Wayans",
        year: 2000
    }
];
console.log(comedy);
console.log("==========");
let action = [
    {
        title: "Demolition Man",
        director: "Marco Brambilla",
        year: 1993
    }, 
    {
        title: "Rambo IV",
        director: "Sylvester Stallone",
        year: 2008
    }, 
    {
        title: "Rush Hour",
        director: "Brett Ratner",
        year: 1998
    }
];
console.log(action);
console.log("==========");
let fantasy = [
    {
        title: "The Lord of the Rings",
        director: "Peter Jackson",
        year: 2001
    },
    {
        title: "Jumanji",
        director: "Joe Johnston",
        year: 1995
    }, 
    {
        title: "The Mummy",
        director: "Stephen Sommers",
        year: 1999
    }
];
console.log(fantasy);
// DESAFIO EXTRA //

//* Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
// IF: "MY FAVORIT MOVIE IS..."
// ELSE: "NOT EVEN 5 STARS..." 

let movie = fantasy[0].title;
if (movie === "The Lord of the Rings"){
    console.log(`My favorite movie is:`, movie)
}else{
    console.log('NOT EVEN 5 STARS!!11!!')
}