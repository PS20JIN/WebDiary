console.log('LogIN.js');
const loginPage = document.querySelector("#loginPage")
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const rememberCheck = document.querySelector("#remember-check");
const loginButton = document.querySelector("#loginButton");

if (localStorage.getItem("userId") === undefined || localStorage.getItem("userId") === null) {
    function Login(event) {                                //조건문에서 논리연산자 사용방법.....shit fucking
        event.preventDefault();
        let userId = id.value;
        let userPassword = password.value;
        localStorage.setItem("userId", userId);
        localStorage.setItem("userPassword", userPassword);
    }
    loginButton.addEventListener("submit", Login);
}

//자동 로그인은 나중에 만들어야징