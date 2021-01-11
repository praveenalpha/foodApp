let submit = document.querySelector(".signup-btn");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPwd = document.querySelector("#cnfrmpwd");
let profileInputBtn = document.querySelector(".profile-input-btn");

submit.addEventListener("click", async function (e){
    try{
        e.preventDefault();
        let Name = name.value;
        let Email = email.value;
        let pwd = password.value;
        let cnfrmpwd = confirmPwd.value;
        // console.log(cnfrmpwd,pwd,Email,Name);
        let userObj = {
            "name":Name,
            "email":Email,
            "password":pwd,
            "confirmPassword":cnfrmpwd
        }
        let obj = await axios.post("http://localhost:3000/api/user", userObj);
        console.log(obj);
    }
    catch(error){
        console.log(error);
    }
})

profileInputBtn.addEventListener("change", async function (e){
    try{
        e.preventDefault();
        let file = profileInputBtn.files;
        console.log(file);
    }
    catch(error){

    }
})