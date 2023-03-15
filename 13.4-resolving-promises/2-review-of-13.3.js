/* 
Concept-> If you want the ability to wait for an async process to complete (by default async code is non-blocking, and there is no way to wait for an async process to finish before running some other code)-> expecially if we have some sync code that we wnat to run AFTER async code

The way to solve this is through using a promise.

Promises allow us to make it so that we can wait for an async process to finish BEFORE we run some other code that relies on the async process


Use case 1-> we may want to wait for a upload to finish before executing some code to do something with the upload

*/


function upload(url) { //sync
  console.log(`Start upload video from this url: ${url} to Youtube`); //sync
  let fileName; //sync 
  setTimeout(() => { //async 
      fileName = url.split("/").pop(); //sync-and-async.mov
      console.log(`Video uploaded from ${url} to ${fileName} on youtube`);
  }, 2000);

  return fileName; //sync
}


function notifyFollowersAboutNewVideo(videoFile) {
  console.log(`Start notifying people of this video: ${videoFile} ...`);

  setTimeout(() => {
      console.log(`Notifications are all sent out about: ${videoFile}.`);
  }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";


const fileName = upload(url)

notifyFollowersAboutNewVideo(fileName)
// console.log(fileName)

console.log("load up the other videos that are already in the db")