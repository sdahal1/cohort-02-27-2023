
/*


ASSESSMENT STUDY GUIDE BELOW


1. addHeadingsAndImages-> make all <article>Puppy</article> look like 
        <article>
            <h3>Puppy</h3>
            <img src = "linkgoeshere">
        </article>
2. styleKittensandPuppies-> style all cats and dogs by adding the classlist     "kitten" or "puppy" to the article containing either a kitten or a puppy
    eg: <article><h3>Puppy</h3></article> will look like <article class="puppy"><h3>Puppy 1</h3></article> and <article class="kitten"><h3>Kitten 1</h3></article>
3. separateCatsFromDogs
    -create a "kittens" section with the class of "kittens" to put kitten articles into
    -if the article has a kitten, remove it from that section and add it to a new section for kittens
*/



let images = [
    "https://media.tenor.com/BlHLysXBit4AAAAC/puppy-love-hi.gif",
    "https://media.tenor.com/PTBNHIGHS-kAAAAd/dog-smile.gif",
    "https://media.tenor.com/bK1qpWGyQKkAAAAM/kitty.gif",
    "https://media.tenor.com/avkEJ6QsXLcAAAAM/puppy.gif",
    "https://media.tenor.com/XybizgnL1zQAAAAM/kittens-cute.gif",
    "https://media.tenor.com/gZHJZ3gNDYwAAAAM/cute-cat.gif",
    "https://media.tenor.com/JMv_beVhW98AAAAM/perrete.gif",
    "https://media.tenor.com/g9bkJfFtovMAAAAM/dog.gif",
    "https://media.tenor.com/kKvpaWwGoPcAAAAM/stretch-kitty.gif",
    "https://media.tenor.com/WT7snNMnZoMAAAAM/luv-you-cute-kitten.gif"
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~solutions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function addHeadingsAndImages(){
    //select all the article tags
    const allArticles = document.querySelectorAll("article");
    allArticles.forEach((articleElement,index)=>{
        // create an h3 to insert into the article later on
        // const h3 = `<h3>${articleElement.innerText}</h3>`;
        const h3 = document.createElement("h3");
        h3.innerText = articleElement.innerText;

        const img = document.createElement("img");
        img.src = images[index]
        //insert the h3 as a child to the current articleElement in the loop
        articleElement.innerText = "";
        // articleElement.innerHTML += h3;
        articleElement.appendChild(h3);
        articleElement.appendChild(img)
    })
}

function styleKittensandPuppies(){
    //select all the article tags
    const allArticles = document.querySelectorAll("article");
    //for each article in the nodelist of allArticles, check if it has the word Puppy or Kitten in it innerText and give the appropriate class based on that
    allArticles.forEach((articleElement)=>{
        if(articleElement.innerText.toLowerCase().includes("puppy")){
            articleElement.classList.add("puppy");
        }else{
            articleElement.classList.add("kitten");
        }
    })
}


function separateCatsFromDogs(){
    //create the kittens section with a class of "kittens" to put kittens from the puppies section into first
    const kittensSection = document.createElement("section")
    kittensSection.classList.add("kittens")
    
    //select the element that will become the parent of the section so that we can insert the section as a child to this element
    const rowDiv = document.querySelector(".row");

    //insert the kittens section as a child to the rowDiv
    rowDiv.appendChild(kittensSection)

    //we will look at all the articles to see which article needs to be placed into the kittens section
    const allArticles = document.querySelectorAll("article");

    //select the puppies section so that we can referene the puppies section to remove kittens from puppies section
    const puppiesSection = document.querySelector(".puppies")
    allArticles.forEach((articleElement)=>{
        if(articleElement.innerText.toLowerCase().includes("kitten")){
            //remove the current articleElement if it includes the innerText of "kitten"
            // paretnElementHere.removeChild(childElementHere)
            puppiesSection.removeChild(articleElement)
            kittensSection.appendChild(articleElement)
        }
    })
}


addHeadingsAndImages()
styleKittensandPuppies()
separateCatsFromDogs()