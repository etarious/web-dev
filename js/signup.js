
let errorMsg = document.getElementById("error");
let successMsg = document.getElementById("success");

let users;

if (localStorage.getItem("users") == null) {
    users = [];
} else {
    users = localStorage.getItem('users');
    users = JSON.parse(users);
}




function signup() {
    
// Get the data from the form

errorMsg.innerHTML = "";
successMsg.innerHTML = "";

let error = 0;

let user;

let firstname = document.getElementById("firstname").value;
let lastname = document.getElementById("lastname").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;

// console.log(firstname);

// VALIDATION
// ## Empty field

if (firstname == "" || firstname == null || firstname.lenght == 0) {
    error = 1;
}
if (lastname == "" || lastname == null || lastname.lenght == 0) {
    error = 1;
}
if (email == "" || email == null || email.lenght == 0) {
    error = 1;
}
if (password == "" || password == null || password.lenght == 0) {
    error = 1;
}
if (confirm == "" || confirm == null || confirm.lenght == 0) {
    error = 1;
}

if (error == 0) {
    // There are no empty fields

    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let conpat = pattern.exec(email);

    // console.log(conpat);

    if (conpat == null) {
        // Incorrect email...
        // console.log("Invalid email");
        errorMsg.innerHTML = "Invalid Email Address";
    } else {
        // Correct email...
        // console.log("Valid email");
        
        if (confirm === password) {
            // It is correct...

            let checkUser = false;

            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                if (user.email == email) {
                    checkUser = true;
                }
            }

            if (checkUser == false) {
                // User does not exist...
                user = {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password
                }
    
                // console.log(user);
    
                users.push(user);
    
                // console.log(users);
    
                newUsers = JSON.stringify(users);
    
                localStorage.setItem("users", newUsers);

                successMsg.innerHTML = "User signup successful";
            } else {
                // User already exist...

                errorMsg.innerHTML = "User already exists!";
            }
            
            
        } else {
            // Incorrect...
            errorMsg.innerHTML = "Confirm password is incorrect";
        }
    }
    
} else {
    errorMsg.innerHTML = "Please enter all fields";
}

// ## Validate data
// ## Confirm the password
// Check if user already exists
// Save data to DB



}