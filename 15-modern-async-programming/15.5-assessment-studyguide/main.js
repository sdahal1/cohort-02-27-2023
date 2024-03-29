const { enterLibrary, leaveLibrary, checkOutBook } = require("./book-recommendor");

async function getARandomBook(libraryCard) {
  // checkOutBook(libraryCard)
  //   .then((response) => {
  //     console.log(`Your libraryCard info is this: ${libraryCard.name} - ${libraryCard.id}`);
  //     console.log(`Your random book is: ${response}.`);
  //   })
  //   .catch((err) => {
  //     console.log(`Uh oh ${err}`);
  //   });
  try{
    const response = await checkOutBook();
    console.log(`Your libraryCard info is this: ${libraryCard.name} - ${libraryCard.id}`);
    console.log(`Your random book is: ${response}.`);
  }catch(err){
    console.log(`Uh oh ${err}`);
  }
}

async function getKnowledge(libraryCard={}) {
  // enterLibrary()
  //   .then(console.log)
  //   .then(() => getARandomBook(libraryCard))
  //   .then(() => leaveLibrary())
  //   .then(console.log)
  //   .catch((err) => {
  //     console.log(`Uh oh ${err}`);
  //   });
  try{
    const welcomeToLibarayMsg = await enterLibrary();
    console.log(welcomeToLibarayMsg);
    await getARandomBook(libraryCard);
    const leaveLibarayMsg = await leaveLibrary();
    console.log(leaveLibarayMsg);
  }catch(err){
    console.log(`Uh oh ${err}`)
  }
}



// getKnowledge({name: "Rob", id: 13})
getKnowledge()
