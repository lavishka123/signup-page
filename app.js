var usersData = []
var registerBtn = document.getElementById("register");
registerBtn && registerBtn.addEventListener("click", function () {

    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPassword = document.getElementById("registerPassword")
    var userObj = {
        name: rName.value,
        email: rEmail.value,
        password: rPassword.value
    }
    
    if (!userObj.name || !userObj.email || !userObj.password) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required!",
        });
        return;
    }
    usersData.push(userObj);
    localStorage.setItem("userObj", JSON.stringify(usersData));


    rName.value = ""
    rEmail.value = ""
    rPassword.value = ""
    // location.href = "login.html"

    // var fetchingData = JSON.parse(localStorage.getItem("users"));
    // fetchingData.push(userObj)



    Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have been registered!",
    });


})

location.href = "login.html"



var loginBtn = document.getElementById("login")


loginBtn && loginBtn.addEventListener("click", function (event) {


    var loginEmail = document.getElementById("loginEmail")
     var loginPass = document.getElementById("loginPassword")

    var users = JSON.parse(localStorage.getItem("users"));


    for (var user of users) {
        if (user.email == loginEmail.value) {

            if (user.password == loginPass.value) {
                console.log("login successfully");

            }
            else {
                console.log("email is ok wrong password");

            }

        }
        else {
          if(loginPass.value == user.password){
            console.log("password is ok email is wrong");
            
          }

        }

    }
})



// location.href = "login.html"

// var loginBtn = document.getElementById("login");
// loginBtn && loginBtn.addEventListener("click", function (event) {
    // var loginEmail = document.getElementById("loginEmail");
    // var loginPass = document.getElementById("loginPassword");


    // var users = JSON.parse(localStorage.getItem("usersData"));

    // if (!users) {
        // Swal.fire({
            // icon: "error",
            // title: "No users found",
            // text: "Please register first.",
        // });
        // return;
    // }


    // let userFound = false;
    // for (var user of users) {
        // if (user.email === loginEmail.value) {
            // userFound = true;
            // if (user.password === loginPass.value) {
                // Swal.fire({
                    // position: "top-end",
                    // icon: "success",
                    // title: "Login Successfully",
                    // showConfirmButton: false,
                    // timer: 1500
                // });

            // } else {
                // Swal.fire({
                    // icon: "error",
                    // title: "Oops...",
                    // text: "Password is incorrect!",
                // });
            // }
            // break;
        // }
    // }

    // if (!userFound) {
        // Swal.fire({
            // icon: "error",
            // title: "Oops...",
            // text: "Email not found!",
        // });
    // }
// });
