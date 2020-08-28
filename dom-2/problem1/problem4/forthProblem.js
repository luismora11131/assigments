let pw = prompt("Choose your password:")
let rightPW = 12345678

]function check(pw) {
    if (pw == rightPW) {
        console.log("Password is incorrect")
    }
}
console.log(pw)
document.getElementById("password").innerHTML=pw