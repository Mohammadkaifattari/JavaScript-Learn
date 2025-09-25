var users = JSON.parse(localStorage.getItem("users")) || [];
var form = document.getElementById("container")
var first = document.getElementById("first")
var Signin = document.getElementById("Signin")

function SignUp(event) {
    event.preventDefault();

    var FirstName = document.getElementById("FirstName");
    var SecondName = document.getElementById("SecondName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var user = new User(
        FirstName.value,
        SecondName.value,
        email.value,
        password.value
    );

    users.push(user);


    console.log("Saving user:", user);

    localStorage.setItem("users", JSON.stringify(users));

    event.target.reset();
     document.getElementById("first").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("Signin").style.display = "none";
}

class User {
    constructor(FirstName, SecondName, email, password) {
        this.FirstName = FirstName;
        this.SecondName = SecondName;
        this.email = email;
        this.password = password;
    }
}


function SignIn(event) {
    event.preventDefault();

    var InputEmail = document.getElementById("given-email").value;
    var InputPassword = document.getElementById("given-password").value;

    var found = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].email === InputEmail && users[i].password === InputPassword) {
            document.getElementById("text").innerHTML = "You are successfully logged in!";
            console.log("Login successful:", users[i]);
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById("text").innerHTML = "Invalid email or password";
        console.log("Login failed");
    }
}



function showSignUp() {
    document.getElementById("first").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("Signin").style.display = "none";
}
function showSignIn() {
    document.getElementById("first").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("Signin").style.display = "block";
}
