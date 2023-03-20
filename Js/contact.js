import loading from "./loading.js";




export let allowedName = false;
let allowedEmail = false;
let allowedPhone = false;
let allowedAge = false;
let allowedPassword = false;
let allowedRePassword = false;

export default class contact {



    constructor() {
        new loading().startLoad()
       
        this.displayContact()
        let nameInput = document.querySelector("#nameInput");
        let nameAlert = document.querySelector("#nameAlert")
        let emailInput = document.querySelector("#emailInput");
        let emailAlert = document.querySelector("#emailAlert");
        let phoneInput = document.querySelector("#phoneInput");
        let phoneAlert = document.querySelector("#phoneAlert");
        let ageInput = document.querySelector("#ageInput");
        let ageAlert = document.querySelector("#ageAlert");
        let passwordInput = document.querySelector("#passwordInput");
        let passwordAlert = document.querySelector("#passwordAlert");
        let rePasswordInput = document.querySelector("#rePasswordInput");
        let rePasswordAlert = document.querySelector("#rePasswordAlert");
        let submitBtn = document.querySelector("#submitBtn");
        // console.log(this.validateAll());
        new loading().stopLoad();
        nameInput.addEventListener("input", () => {
            this.nameValidate()

        })
        emailInput.addEventListener("input", () => {
            this.emailValidate()

        })
        phoneInput.addEventListener("input", () => {
            this.phoneValidate()

        })

        ageInput.addEventListener("input", () => {
            this.ageValidate()

        })


        passwordInput.addEventListener("input", () => {
            this.passwordValidate()

        })

        rePasswordInput.addEventListener("input", () => {
            this.rePasswordValidate()
            this.validateAll()
        })


    }



    displayContact() {
        let contact = `  <div class="contact py-5 d-flex justify-content-center align-items-center ">
<div class="container w-75 text-center ">
    <div class="row g-4 py-5">
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Enter Your Name" id="nameInput">

            <div class=" alert alert-danger w-100 d-none mt-2" id="nameAlert">
                Special characters and numbers not allowed
            </div>
        </div>


        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Enter Your Email" id="emailInput">
            <div class=" alert alert-danger w-100 d-none mt-2" id="emailAlert">
                Email not valid *exemple@yyy.zzz
            </div>
        </div>


        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Enter Your phone" id="phoneInput">
            <div class=" alert alert-danger w-100 d-none mt-2" id="phoneAlert">
                Enter valid Phone Number
            </div>
        </div>

        <div class="col-md-6">
            <input type="number" class="form-control" placeholder="Enter Your Age" id="ageInput">
            <div class=" alert alert-danger w-100 d-none mt-2" id="ageAlert">
                Enter valid age
            </div>
        </div>


        <div class="col-md-6">
            <input type="password" class="form-control" placeholder="Enter Your Password" id="passwordInput">
            <div class="passwordAlert alert alert-danger w-100 d-none mt-2" id="passwordAlert">
                Enter valid password *Minimum eight characters, at least one letter and one
                number:*
            </div>
        </div>


        <div class="col-md-6">
            <input type="password" class="form-control" placeholder="Repassword" id="rePasswordInput">
            <div class=" alert alert-danger w-100 d-none mt-2" id="rePasswordAlert">
                Enter valid repassword
            </div>
        </div>


        <div class="col-md-3  mx-auto ">
            <button class="btn btn-outline-danger " disabled id="submitBtn">Submit</button>
        </div>

    </div>
</div>
</div>
`
        document.querySelector("#rowHomeMeals").innerHTML = contact;

    }
    validateAll() {

        if (this.nameValidate() &&
            this.emailValidate() &&
            this.phoneValidate() &&
            this.ageValidate() &&
            this.passwordValidate() &&
            this.rePasswordValidate()) {
            console.log("azxq");
            submitBtn.removeAttribute("disabled")
        }
        else {
            submitBtn.setAttribute("disabled", "true")
            console.log("ehab");
        }
    }




    nameValidate() {

        let regex = /^[a-z A-Z]+$/


        if (regex.test(nameInput.value)) {
            nameAlert.classList.replace("d-block", "d-none");
            console.log("yes from name");
            allowedName = true;

        }

        else {
            nameAlert.classList.replace("d-none", "d-block");
            console.log("No from name");
            allowedName = false;
        }


        console.log(allowedName, "name");
        return allowedName;

    }





    emailValidate() {

        let regex = /^\w{4,}[@](yahoo|gmail|hotmail)\.com$/;


        if (regex.test(emailInput.value)) {
            emailAlert.classList.replace("d-block", "d-none");
            console.log("yes from email");
            allowedEmail = true;
        }
        else {
            emailAlert.classList.replace("d-none", "d-block");
            console.log("No from email");
            allowedEmail = false;
        }
        console.log(allowedEmail, "email");
        return allowedEmail;
    }









    phoneValidate() {

        let regex = /^(011|012|015|010)[\d]{8}$/;


        if (regex.test(phoneInput.value)) {
            phoneAlert.classList.replace("d-block", "d-none");
            console.log("yes from phone");
            allowedPhone = true;
        } else {
            phoneAlert.classList.replace("d-none", "d-block");
            console.log("No from phone");
            allowedPhone = false;
        }
        console.log(allowedPhone, "phone");
        return allowedPhone;
    }





    ageValidate() {

        let regex = /^([1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;


        if (regex.test(ageInput.value)) {
            ageAlert.classList.replace("d-block", "d-none");
            console.log("yes from Age");
            allowedAge = true;
        } else {
            ageAlert.classList.replace("d-none", "d-block");
            console.log("No from Age");
            allowedAge = false;
        }
        console.log(allowedAge, "age");
        return allowedAge;
    }






    passwordValidate() {

        // let regex = /^([\w]{1,}|[\d]{1,}){8,}[\@\!\#\$\%\^\&&\*\-\_]{1,}$/;
        let regex = /^^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$$/;
        // let regex = /^(.){8,}$/;



        if (regex.test(passwordInput.value)) {
            passwordAlert.classList.replace("d-block", "d-none");
            console.log("yes from password");
            allowedPassword = true;
        } else {
            passwordAlert.classList.replace("d-none", "d-block");
            console.log("No from password");
            allowedPassword = false;
        }
        console.log(allowedPassword, "password");
        return allowedPassword;
    }





    rePasswordValidate() {




        if (passwordInput.value == rePasswordInput.value) {
            console.log("yes from rePassword");
            rePasswordAlert.classList.replace("d-block", "d-none");

            allowedRePassword = true;
        }
        else {
            rePasswordAlert.classList.replace("d-none", "d-block");
            console.log("No from rePassword");
            allowedRePassword = false;
        }
        console.log(allowedRePassword, "rePassword");
        return allowedRePassword;

    }




    // return (nameValidate() && emailValidate() && phoneValidate() && ageValidate() && passwordValidate() && rePasswordValidate());



}