const submitHandler = (event) => {
  event.preventDefault();
  console.log("The form was submitted");

  //extract the information collected from the form and put it in the variable formData
  const formData = new FormData(event.target);
  // console.log(formData.get("name"))
  // console.log(formData.get("location"))
  // console.log(formData.get("description"))
  // console.log(formData.get("established"))
  // console.log(formData.get("area"))
  // console.log(formData.get("rating"))

  const errors = validateForm(formData)

  // Clear all previous errors
  const errorElements = document.querySelectorAll(".error");
  for (let element of errorElements) {
    element.style.display = "none";
  }


  //if errors object has 0 key value pairs, that means the form had no errors
  Object.keys(errors).forEach((key) => {
    // Find the specific error element
    const errorElement = document.querySelector(`#${key}-form .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });

  //if the form has 0 errors, then create a park
  if(Object.keys(errors).length === 0){
    // Create a new element
    const parkSection = document.createElement("section");
    parkSection.classList.add("park-display");

    const content = `
    <h2>${formData.get("name")}</h2>
    <div class="location-display">${formData.get("location")}</div>
    <div class="description-display">${formData.get("description")}</div>
    <button class="rate-button" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established-display stat">
        <h3>Established</h3>
        <div class="value">${moment(formData.get("established")).format(
          "MMMM D, YYYY"
        )}</div>
      </div>
      <div class="area-display stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}</div>
      </div>
      <div class="rating-display stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
    </div>
    `;

    parkSection.innerHTML = content;


    // const main = document.querySelector("main")
    // main.appendChild(parkSection)
    // Append to the main element
    document.querySelector("main").appendChild(parkSection);

  }


};

function validateExists(value) {
  return value && value.trim();
}

function validateNumber(value) {
  return !isNaN(value);
}

function validateRange(value, min, max) {
  return value >= min && value <= max;
}

function validateForm(formData) {
  const errors = {};

  // Check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  // Check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  }
  if (!validateNumber(formData.get("rating"))) {
    errors.rating = "Rating must be a number";
  }else{
    // Because it is a number, convert it
    const rating = Number.parseFloat(formData.get("rating"));
    // Check that the rating is between 1 and 5, inclusive
    if (!validateRange(rating, 1, 5)) {
      errors.rating = "Rating must be between 1 and 5 inclusive";
    }
  }

  // Check if description was entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  // Check if established date was entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  // Check if area was entered
  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area of the park";
  }

  // Check if location date was entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }
  console.log(errors)
  return errors;
}


const main = ()=>{
  //select the form element that we want to collect information from
  const form = document.querySelector("#park-form");
  
  //attach an event listener to the form to make it listen for submit events
  form.addEventListener("submit",submitHandler)
}


//tell the browser (window) to listne for when the page is fully loaded, and when it is, run the main function
window.addEventListener("DOMContentLoaded", main);