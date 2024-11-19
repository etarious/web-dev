
let userDetails = localStorage.getItem('loggedInUser');

userDetails = JSON.parse(userDetails);

document.getElementById("welcome-name").innerHTML = userDetails.firstname;
document.getElementById("email").innerHTML = userDetails.email;
document.getElementById("firstname").innerHTML = userDetails.firstname;
document.getElementById("lastname").innerHTML = userDetails.lastname;


console.log($("h1").val());

function logout() {
    // Logout scriptsgoes here...

    localStorage.removeItem("loggedInUser");

    window.location.replace("./login.html");
}


