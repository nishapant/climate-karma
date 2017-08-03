var peopleInfo = [];


class Person{
  constructor(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
  }
  getUsername(){
    return this.username;
  }
  getPassword(){
    return this.password;
  }
  getEmail(){
    return this.email;
  }
}

function collectData(){
  var user, psswrd, mail;
  user = document.getElementById("username").value;
  alert(peopleInfo[0].getUsername());
}
