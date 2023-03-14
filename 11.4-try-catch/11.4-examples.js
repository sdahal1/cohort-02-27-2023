/* 
Try-catch: A way of handling errors in your code so that the whole application does not crash because of an error

Use Case-> When you have a risky operation you want to try, but there is not guarantee that the risky operation will succeed (eg: Rob trying a JuJitSu Move on Sumo Wrestler) and if the operation fails, I can catch the error that comes from the reisky operation and keep my app running (rob tapping out)

Real life use case -> 
  -If a password is incorrect, instead of crashing the whole app, it will just give you some message and keep you on the login page
  -When your app relies on external sources for some data it needs to use, but those external sources are failing, we can prevent the whole app from crashing if the other external sources are not working properly using try-catch
*/


function getRandomNumber() {
  // Math.floor(Math.random() * 100) generates a random number
  const randomNumber = Math.floor(Math.random() * 100); //
  const min = 10;
  
  //wrap the risky operation that could potentially throw an error and break our app --> wrap it in a try block
  try{
    if(randomNumber < 10){
      //error
      throw `The random number ${randomNumber} is less than 10. Or The external server we get data from, is down`
    }else{
      console.log(`Yay you got data from NYSE, or yay your ranomd number of ${randomNumber} is greater than 10`)
    }
  }catch(error){
    
    console.log("trying plan b to get stock data from anoter server thats slightly slower ")
    console.log("error that was thrown looks like this", error)
  }

}

getRandomNumber()

console.log("other code for our application")