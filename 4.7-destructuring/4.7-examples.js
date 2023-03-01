const product = {
  title: "The Golden Compass",
  priceInCents: 799,
  author: {
    firstName: "Philip",
    surname: "Pullman",
  },
};



function printAuthorAndTitle(product) {
  // const title = product.title;
  // const author = product.author;
  const {title, quantity, author:{firstName,surname}, author} = product; //quantity is undefined
  console.log(author)
  return `${title} by ${firstName} ${surname}. Quantity is ${quantity}`;
}


function printAuthorAndTitle2(storeName, {title, quantity, author:{firstName,surname}, author}, [firstStore,,thirdStore]) {
  // const [firstStore,,thirdStore] = otherAvailableStores
  // // const title = product.title;
  // // const author = product.author;
  // const {title, quantity, author:{firstName,surname}, author} = product; //quantity is undefined
  console.log(author)
  console.log(firstStore, thirdStore)
  return `${title} by ${firstName} ${surname}. Quantity is ${quantity}`;
}
console.log(printAuthorAndTitle2("Amazon", product, ["Walmart", "Target", "Blockbuster", undefined]))


const genres = [
  "Fantasy",
  "Fiction",
  "Nonfiction",
  "Science Fiction",
  "Young Adult",
];

// const firstItem = genres[0]
// const thirdItem = genres[2]
// const fifthItem = genres[4]


//spread operator
const [,,...everythingelse] = genres;
console.log(everythingelse)



const modifiedPoroduct = {
  ...product,
  store: "Amazon"
}

console.log(modifiedPoroduct)
