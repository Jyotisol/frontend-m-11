
const emailInput = document.getElementById('email');
const thanks_container = document.querySelector('.thanks-container');
const main = document.querySelector('.main');
const passedEmail = document.querySelector('#passEmail');
const errorText = document.querySelector(".error-text");


function ValidateState() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(emailInput.value)) {
        console.log("Invalid email!");
        errorText.style.display = "block";
        emailInput.style.border = "2px solid red";
        thanks_container.style.display = "none";
} else {
        console.log("Valid email!");
        thanks_container.style.display = "block";
        main.style.display = "none";
        errorText.style.display = "none"; 
        emailInput.style.border = "1px solid black";

        passedEmail.innerHTML=`${emailInput.value}`;
        console.log(emailInput.value);  
        
}
}

const dismiss_btn = document.querySelector('.btn-1');
dismiss_btn.addEventListener('click',()=>{
        thanks_container.style.display = "none";
        errorText.style.display = "block"; 
        main.style.display = "flex";

});