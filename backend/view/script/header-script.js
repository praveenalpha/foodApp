let signup = document.querySelector(".signup");

signup.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log(window.location);
    window.location.href = "/foodApp/backend/view/signup.html";
})