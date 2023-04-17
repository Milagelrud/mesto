let buttonOpenPopup = document.querySelector('.profile__edit-button');
let buttonClosePopup = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('input[name="username"]');
let jobInput = formElement.querySelector('input[name="job"]');

let profileInfoName = document.querySelector('.profile__info-name');
let profileInfoJob = document.querySelector('.profile__info-job');

nameInput.value = profileInfoName.textContent
jobInput.value = profileInfoJob.textContent

function displayNone() {
    popup.style.display = 'none';
  }

buttonOpenPopup.addEventListener('click', function () {
    popup.style.display = 'flex';
  }); 

buttonClosePopup.addEventListener('click', displayNone);

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;

    profileInfoName.textContent = nameInputValue;
    profileInfoJob.textContent = jobInputValue;
    displayNone();
}

formElement.addEventListener('submit', handleFormSubmit);