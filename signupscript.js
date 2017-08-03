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
  alert(users);
  user = document.getElementById("username").value;
  psswrd = document.getElementById("password").value;
  mail = document.getElementById("email").value;
  peopleInfo.push(new Person(user, psswrd, mail));
  alert(peopleInfo);

}
