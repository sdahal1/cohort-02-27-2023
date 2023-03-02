const title = "Infernal Devices";
const author = "K.W. Jeter";

// const book = {
//   title: title,
//   author: author
// }


const book = { title, author };


const product = { book, priceInCents: 1950 };
// console.log(product);



const ownedBooks = ["Infernal Devices", "Foundation"];
const wishlist = ["Good Omens", "Guards! Guards!"];


const allBooks = ownedBooks.concat(wishlist)
const allBooks2 = [...ownedBooks, ...wishlist]
console.log(allBooks);


const salesTax = { state: "Washington", tax: 0.065 };
const sale = { priceInCents: product.priceInCents, ...salesTax, isBestSeller: true  };
console.log(sale)