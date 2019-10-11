// NEEDS REFACTORING \\

document.addEventListener("DOMContentLoaded", () => {

  let fullname = document.querySelector('#fullname')
  let email = document.querySelector('#email')
  let street = document.querySelector('#street')
  let city = document.querySelector('#city')
  let state = document.querySelector('#state')
  let postcode = document.querySelector('#postcode')
  let phone = document.querySelector('#phone')
  let cell = document.querySelector('#cell')
  let date_of_birth = document.querySelector('#date_of_birth')
  const button = document.querySelector('#submit-button')

  button.addEventListener('click', event => {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {
    let personInfo = json.results[0]
    
    fullname.innerText = `${personInfo.name.title} ${personInfo.name.first} ${personInfo.name.last}`
    email.innerText = personInfo.email
    street.innerText = `${personInfo.location.street.number} ${personInfo.location.street.name}`
    city.innerText = personInfo.location.city
    state.innerText = personInfo.location.state
    city.innerText = personInfo.location.city
    postcode.innerText = personInfo.location.postcode
    phone.innerText = personInfo.phone
    cell.innerText = personInfo.cell
    date_of_birth.innerText = personInfo.dob.date.split('T', 1)[0]
    })
  })
})
