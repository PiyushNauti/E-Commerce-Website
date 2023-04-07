function check() {
    var mail = document.getElementById('email');
    var password = document.getElementById('pass');

    if (mail.value.trim() == "" || password.value.trim() == "") {
        alert('blank values are not allowed')

    }
    if (mail.value === "admin@admin.com" && password.value === "123456") {
        alert('Login successful');

    }
    else {
        alert('Incorrect password or email')

    }
}


function modifyQuantity(changeInQuantity) {
    var oldQnt = parseInt(document.getElementById('res').value, 10);
    var newQnt = oldQnt + changeInQuantity;
    document.getElementById("res").value = newQnt;

}

function reset() {
    document.getElementById("res").value = 0;
}