console.log('LogIN.js');
const loginPage = document.querySelector("#loginPage")
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const rememberCheck = document.querySelector("#remember-check");
const loginButton = document.querySelector("#loginButton");

function Login(event) {                                //조건문에서 논리연산자 사용방법.....shit fucking
    event.preventDefault();
    let userId = id.value;
    if (localStorage.getItem("userId") != userId || localStorage.getItem("userId") === null || localStorage.getItem("userId") === undefined) {
        localStorage.setItem("userId", userId);
        sessionStorage.setItem("currentUser", userId)
    } else {
        sessionStorage.setItem("currentUser", userId);
    }
    window.location.href = "main.html"
}
loginPage.addEventListener("submit", Login);



//자동 로그인은 나중에 만들어야징
//같은 사용자끼리 id랑 password 묶는것도 만들기.(password도 이때 같이 만들기)
//여러 사용자가 로그인하는것을 엄두에 두고 localStorage에 다양한 id를 만들 수 있게 하기.