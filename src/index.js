const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let button = document.querySelector('button');
  
  
  button.addEventListener("click", function(){
    let thePromise = fetch("https://randomuser.me/api/")
    console.log(thePromise)
    thePromise
    .then((response) => {console.log(response); return response.json()})
    .then((responseJSON) => {console.log(responseJSON);
      let imageTag = document.querySelector('#profile_picture');
      let nameTag = document.querySelector('#fullname');
      let emailTag = document.querySelector('#email');
      let streetTag = document.querySelector('#street');
      let cityTag = document.querySelector('#city');
      let stateTag = document.querySelector('#state');
      let phoneTag = document.querySelector('#phone');
      let cellTag = document.querySelector('#cell');
      let dobTag = document.querySelector('#date_of_birth');
      let postTag = document.querySelector('#postcode');
      imageTag.src = responseJSON.results[0].picture.medium
      nameTag.innerText = `${responseJSON.results[0].name.first} ${responseJSON.results[0].name.last}`
      emailTag.innerText = responseJSON.results[0].email
      streetTag.innerText = `${responseJSON.results[0].location.street.number} ${responseJSON.results[0].location.street.name}`
      cityTag.innerText = responseJSON.results[0].location.city
      stateTag.innerText = responseJSON.results[0].location.state
      phoneTag.innerText = responseJSON.results[0].phone 
      cellTag.innerText = responseJSON.results[0].cell 
      dobTag.innerText = responseJSON.results[0].dob.date
      postTag.innerText = responseJSON.results[0].location.postcode
      })
  })
});
