const form = document.querySelector('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
let credentialArray = []
let url = 'Login.html'
let credentialsDB = localStorage.getItem('credentials') ? JSON.parse(localStorage.getItem('credentials')) : [];
function checkDB(){
  if (credentialsDB.length == 0){
    saveToDB()
  }else{
    alert('Can\' have more than one account on one device')
  }
}

const validateInputs = () => {
  if (name.value == '' || email.value == '' || password.value == '' || password.value.length < 6){
    return false;
  }
  checkDB()
}

function saveToDB(){
  let userName = name.value
  let emailAddress = email.value
  let encryptedPassword = btoa(password.value)
  let credentials = {
    userName,
    emailAddress,
    encryptedPassword
  }
  credentialArray.push(credentials)
  localStorage.setItem('credentials', JSON.stringify(credentialArray))
  location.replace(url)
  
}
  
  
form.addEventListener('submit', (e) => {
  e.preventDefault()
})

submit.addEventListener('click', (e) => {
  validateInputs()
})