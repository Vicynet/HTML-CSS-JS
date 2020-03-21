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