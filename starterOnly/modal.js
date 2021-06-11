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
const modalConfirm = document.querySelector(".confirmation");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");

// launch/close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", function(){launchModal(modalbg)}));
modalCloseBtn[0].addEventListener("click", function(){closeModal(modalbg)});
modalCloseBtn[1].addEventListener("click", function(){closeModal(modalConfirm)});

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
    'city' : cityChecked()
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

//watch inputs and display error msg div if not valid
formData.forEach((field) => {
  const inputField = field.getElementsByTagName('input');
  inputField[0].addEventListener("keyup", function(){validateField(inputField[0])})
})

function validateField(inputField){ //FIXME ne fonctionne pas convenablement avec radio et checkbox
  if(!inputField.validity.valid){
    inputField.parentElement.nextElementSibling.style.display = "block"
  }else{
    inputField.parentElement.nextElementSibling.style.display = "none"
  }
}