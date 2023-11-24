let button_click = document.getElementById("Sign-up")
button_click.addEventListener('click', button_sign_up)


function button_sign_up() {
    let name = document.getElementById('Name').value
    let email = document.getElementById('Email').value
    let pass = document.getElementById('Password').value
    let con_pass = document.getElementById('Con-Password').value
    if (pass.length >= 8 && con_pass.length >= 8) {
        if (pass == con_pass) {
            let a = confirm("hello " + name + "\n your email : " + email + " ? ")
            if (a == true) {
                alert("Thank you for Sign-up " + name)
                document.getElementById('Name').value = ""
                document.getElementById('Email').value = ""
                document.getElementById('Password').value = ""
                document.getElementById('Con-Password').value = ""

            } else {
                document.getElementById('Name').value = name
                document.getElementById('Email').value = email
                document.getElementById('Password').value = pass
                document.getElementById('Con-Password').value = con_pass

            }
        } else {
            alert("your password & conform_password is not matched")
        }
    } else {
        alert("please input more than 8 digit in password & conform_password  ")
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('Password');


    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var showPasswordCheckbox = document.getElementById('showPassword');

    showPasswordCheckbox.addEventListener('change', togglePasswordVisibility);
});

function togglePasswordVisibility1() {
    var passwordInput = document.getElementById('Con-Password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var showPasswordCheckbox = document.getElementById('showPassword1');

    showPasswordCheckbox.addEventListener('change', togglePasswordVisibility1);
});



