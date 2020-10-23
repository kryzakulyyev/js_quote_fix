//Transform a string into an array and fix it!

let quote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";
//1
let favoriteQuote=quote.split(" ");
console.log(favoriteQuote)
//2
console.log(favoriteQuote.length);
favoriteQuote.pop();

//3
console.log(favoriteQuote.length);

//4
favoriteQuote.push("Development", "ThougtWorks", "Inc");

//5
favoriteQuote[1]="fool";


//6
favoriteQuote.shift();

//7
favoriteQuote.unshift("Any");

//8
favoriteQuote.splice(7,5, "computer");

//9 
console.log(favoriteQuote.join(" "));


/* “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler. Software Development, ThoughtWorks Inc. */
