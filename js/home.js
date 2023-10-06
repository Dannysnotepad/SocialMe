let credentialsDB = localStorage.getItem('credentials') ? JSON.parse(localStorage.getItem('credentials')) : [];

let checkDB = () => {
  if(credentialsDB.length == 0){
    location.replace('index.html')
  }else{
    let Name = credentialsDB[0].userName
    console.log(Name)
    document.getElementById('name').textContent = `${Name}!`
  }
}
checkDB()