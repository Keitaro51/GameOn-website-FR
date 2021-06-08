function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// launch/close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal
function closeModal(){
  modalbg.style.display = "none";
}

/**
 * after a submitting valid form, store datas into a constant
 *
 * @return  {void}
 */
function validate(){
  const formContent = {
    'firstname' : document.getElementById('first').value,
    'lastname' : document.getElementById('last').value,
    'email' : document.getElementById('email').value,
    'birthdate' : document.getElementById('birthdate').value,
    'quantity' : document.getElementById('quantity').value,
    'city' : cityChecked()
  }
}

/**
 * form selected city
 * 
 * @return  {string}  [return the selected city]
 */
function cityChecked(){
  for(let i = 1; i<7; i++){
    if(document.getElementById(`location${i}`).checked){
      return document.getElementById(`location${i}`).value
    }
  }
}