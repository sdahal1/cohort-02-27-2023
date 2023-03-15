
/* 
The async code we wnat to be able to wait for, we can wrap inside of a promise

Three states to a promise: Pending, Resolved, Rejected

we can check what was resovled from a promise using .then() on the promise
  .then() accepts a cb function. The parameter in the cb of .then() represents whatever was resovled by the promise


Example syntax: 

const uploadPromise = new Promise((resolve,reject)=>{
  //your async code process goes here
})
*/


function upload(url) { //sync
  return new Promise((resolve,reject)=>{

    if(url.length === 0) return reject("Video not found. Upload failed.")

    console.log(`Start upload video from this url: ${url} to Youtube`); //sync

    let fileName; //sync 
    setTimeout(() => { //async 
        fileName = url.split("/").pop(); //sync-and-async.mov
        console.log(`Video uploaded from ${url} to ${fileName} on youtube`);
        return resolve(fileName); //sync
      }, 2000);
  
  })
  //function upload returns a promise
  // return uploadPromise
}


function notifyFollowersAboutNewVideo(videoFile) {
  console.log(`Start notifying people of this video: ${videoFile} ...`);

  setTimeout(() => {
      console.log(`Notifications are all sent out about: ${videoFile}.`);
  }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";


const uploadPromise = upload(url)

console.log(uploadPromise)

// setTimeout(()=>{
//   console.log(uploadPromise)
// },2001)



upload("")
  .then((videoName)=>{
    //the code here will only run after the upload(url) function returns a promise and that promise is resolved ()
    console.log("this represents whatever was resolved by the promise", videoName)
    notifyFollowersAboutNewVideo(videoName)
  })
  .catch((errMsg)=>{
    console.log(errMsg)
  })



// console.log(fileName)

console.log("load up the other videos that are already in the db")