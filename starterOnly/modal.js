// DOM Elements
const nav = document.querySelector('.icon')
const modalbg = document.querySelector(".bground");
const modalConfirm = document.querySelector(".confirmation");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const closeBtn = document.querySelector('.btn-close');

//navbar drop-down for mobile screen
nav.addEventListener("click", editNav);
/**
 * drop-down navbar when click on burger menu icon
 *
 * @return  {void}
 */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch/close modal events
modalBtn.forEach((btn) => btn.addEventListener("click", function(){launchModal(modalbg)}));
modalCloseBtn[0].addEventListener("click", function(){closeModal(modalbg)});
modalCloseBtn[1].addEventListener("click", function(){closeModal(modalConfirm)});
closeBtn.addEventListener("click", function(){closeModal(modalConfirm)});

/**
 * launch the selected modal
 * @param   {string}  modal  [DOM element]
 * @return  {void}
 */
function launchModal(modal) {
  modal.style.display = "block";
}

/**
 * close the selected modal
 * @param   {string}  modal  [DOM element]
 * @return  {void}
 */
function closeModal(modal){
  modal.style.display = "none";
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
    'city' : cityChecked(),
    'condition' : document.getElementById('checkbox1').checked,
    'mailing' : document.getElementById('checkbox2').checked
  }
  closeModal(modalbg);
  launchModal(modalConfirm);
  return false; //avoid page refresh
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

//watch inputs and display data-error if not valid
formData.forEach((field) => {
  const inputField = field.getElementsByTagName('input');
  inputField[0].addEventListener("change", function(){validateField(inputField[0], field)})
})

/**
 * enable or disable custom error message
 *
 * @param   {string}  inputField  [input DOM element to check]
 * @param   {string}  formData    [DOM element where error is displayed (class="data-error")]
 *
 * @return  {void}
 */ 
function validateField(inputField, formData){
  if(!inputField.validity.valid){
    formData.setAttribute('data-error-visible','true')
  }else{
    formData.removeAttribute('data-error-visible')
  }
}