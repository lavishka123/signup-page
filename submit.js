var data = []
var loginbutton = document.getElementById(loginBtn);
    loginbutton && loginbutton.addEventListener("click", function(){
        var lEmail = document.getElementById("emailOrUserName")
        var lPassword = document.getElementById("pass")
        var userObj = {
            name: lEmail.value,
            password: lPassword.value

    }
}
)
data.push(userObj);
localStorage.setItem("userObj", JSON.stringify(data));

lEmail.value = ""
lPassword.value = ""


