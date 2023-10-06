const form = document.querySelector('form')
const password = document.getElementById('password')
const email = document.getElementById('email')
let url = 'home.html'
let credentialsDB = localStorage.getItem('credentials') ? JSON.parse(localStorage.getItem('credentials')) : [];
//console.log(credentialsDB[0].)


const validateInputs = () => {
  if (email.value == '' || password.value == '' || password.value.length < 6) {
    return false;
  }
  checkDB()
}

const checkDB = () => {
  let decryptedPassword = atob(credentialsDB[0]. encryptedPassword)
  //console.log(decryptedPassword)
  if (email.value == credentialsDB[0].emailAddress){
    if(password.value == decryptedPassword){
      //location.replace(url)
    }else{
      alert('Incorrect password')
    }
  }else{
    alert('User does not exist')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

submit.addEventListener('click', (e) => {
  validateInputs()
})