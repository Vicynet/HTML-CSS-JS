var covid_date = new Date();
document.getElementById("date").innerHTML = covid_date.toDateString();

function login() {
    var emailStore = ["ihedioha.victor@gmail.com", "ayemobolatolulope@gmail.com", "fatunbidavidkayode@gmail.com"];
    var passwordStore = ["12345", "123", "1234"];
    var email = document.getElementById("getEmail").value;
    var password = document.getElementById("getPassword").value;

    if((emailStore.includes(email)) && (passwordStore.includes(password))) {
        alert("Successfully Logged in");
        window.location = "https://switafrica.netlify.com";
    }
    else {
        document.getElementById("loginError").innerHTML = "Wrong login credentials";
    }
}

var request = new XMLHttpRequest()

var death = parseInt(document.getElementById("death").innerHTML)
var recovered = parseInt(document.getElementById("recover").innerHTML)
var active = death + recovered
document.getElementById("closed").innerHTML = active

request.open('GET', 'https://api.covid19api.com/live/country/nigeria/status/confirmed', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(Country => {
      document.getElementById("cases").innerHTML = Country.Cases
      document.getElementById("active").innerHTML = Country.Cases - active
    })
  } else {
    console.log('error')
  }
}

request.send()


