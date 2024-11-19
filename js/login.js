let users = localStorage.getItem('users');

users = JSON.parse(users);

let errorMsg = document.getElementById("error");
let successMsg = document.getElementById("success");



function login() {

    // Get the data from the form

    errorMsg.innerHTML = "";
    successMsg.innerHTML = "";

    error = 0;

    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(email, password);
    
    
    if (email == "" || email == null || email.lenght == 0) {
        error = 1;
    }
    if (password == "" || password == null || password.lenght == 0) {
        error = 1;
    }

    if (error == 0) {
        // There are no error. Let's now check if the user exists...

        let checkUser = false;
        let checkPassword = false;
        
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            
            if (email === user.email) {
                // The user exists...
                checkUser = true;
            }
        }
        
        if (checkUser) {
            // We can then check for password...
            
            let userDetails = {};

            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                
                if (password === user.password) {
                    checkPassword = true;
                    userDetails.firstname = user.firstname;
                    userDetails.lastname = user.lastname;
                    userDetails.email = user.email;
                }
            }

            if (checkPassword) {
                // The password is correct...

                userDetails = JSON.stringify(userDetails);

                localStorage.setItem("loggedInUser", userDetails);

                window.location.replace('./welcome.html');
            } else {
                errorMsg.innerHTML = "Incorrect password!";
            }
        } else {
            errorMsg.innerHTML = "User not found!";
        }
    } else {
        errorMsg.innerHTML = "Please enter all fields";
    }

    
}
// Validation