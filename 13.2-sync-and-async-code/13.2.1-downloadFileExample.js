function download(url) { //sync
  console.log(`Start downloading video from ${url} ...`); //sync
  let fileName; //sync 
  setTimeout(() => { //async 
      fileName = url.split("/").pop(); 
      console.log(`Video downloaded from ${url} to ${fileName}.`);
      // callback(fileName)
  }, 2000);

  return fileName; //sync
}


function process(videoFile) {
  console.log(`Start processing ${videoFile} ...`);

  setTimeout(() => {
      console.log(`Video processing complete: ${videoFile}.`);
  }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";

// console.log(url.split("/").pop())
const fileName = download(url)

console.log(fileName)
process(fileName)

