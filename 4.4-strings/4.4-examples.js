/* 
-Strings are immutable! -> you cannot update its existing characters. It will let you add characters to the end of a string though
-Strings have index numbers too, just like arrays
*/

let name = "Rob"

name[0] = "B"


name += " Dahal"
// console.log(name.length)



function sentenceCase(sentence) { //accepts sentence string as a parameter
  const firstCharacter = sentence[0];
  let result = firstCharacter.toUpperCase();

  for (let i = 1; i < sentence.length; i++) {
    const character = sentence[i];
    result += character.toLowerCase();
  }

  return result;
}


function sentenceCase2(sentence) { //accepts sentence string as a parameter
  //.substr(), .substring()
  // console.log(sentence.substr(0,100).toUpperCase())
  // console.log(sentence.substr(1).toLowerCase())

  const result = sentence.substr(0,1).toUpperCase() + sentence.substr(1).toLowerCase();

  return result;
}

const result = sentenceCase2("hey hI HOW YOU doin?")
// console.log(result);




/* 
Splitting and joining strings -> .split() on a string gives you back an array

*/

const studentName = "Filomeno likes to watch soccer and basketball";

// console.log(studentName.split(" "))
// console.log(studentName.split("o"))


function titelize(stringInput){
  const wordsArray = stringInput.split(" ")
  console.log(wordsArray)
  let result = "";
  for(let i = 0; i<wordsArray.length; i++){
    // console.log(wordsArray[i])
    const eachWord = wordsArray[i]
    // result += eachWord[0].toUpperCase() + eachWord.substr(1).toLowerCase() + " "
    result += sentenceCase2(eachWord) + " "

  }

  return result;
}


function titleize2(title) {
  const words = title.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const capitalized = sentenceCase(words[i]);
    result.push(capitalized);
  }

  console.log(result)
  /* .join() is an array method that will let you combine the elements of an array into a string */
  return result.join(" ");
}


// console.log(titleize2(studentName))




/* 
Template literals-> when you want to combine variables with a string, this is really useful

*/


const artists = ["Drake", "Beatles", "Lupe Fiasco", "Guns n roses"];

for(let i = 0; i<artists.length; i++){
  const artistName = artists[i]
  // console.log("One of our top artists named " + artistName + " was found at index " + i)
  console.log(`One of our top artists named "${artistName}" was found at index ${i}`)

}


console.log("hey what's up, we like to \"party\" with coding")
