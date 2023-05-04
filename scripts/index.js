let buttonOpenPopup = document.querySelector('.profile__edit-button');
let buttonClosePopup = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('input[name="username"]');
let jobInput = formElement.querySelector('input[name="job"]');

let profileInfoName = document.querySelector('.profile__info-name');
let profileInfoJob = document.querySelector('.profile__info-job');

function displayNone() {
    popup.classList.remove('popup_open');
  }

function displayOpen() {
    nameInput.value = profileInfoName.textContent
    jobInput.value = profileInfoJob.textContent
    popup.classList.add('popup_open');  
  }

  function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileInfoName.textContent = nameInput.value;
    profileInfoJob.textContent = jobInput.value;
    displayNone();
}

buttonOpenPopup.addEventListener('click', displayOpen); 

buttonClosePopup.addEventListener('click', displayNone);

formElement.addEventListener('submit', handleFormSubmit);