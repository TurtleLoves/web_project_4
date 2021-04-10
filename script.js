let profile__name = document.querySelector(".profile__name");
let profile__about = document.querySelector(".profile__about-me");
let profile__edit = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let modal__name = document.querySelector(".modal__name");
let modal__about = document.querySelector(".modal__about-me");
let modal__close = document.querySelector(".modal__close-icon");
let modal__form = document.querySelector(".modal__form");
let elements = document.querySelector(".elements");
let elements__heart = document.querySelector(".elements__heart");

function open() {
    modal__name.value = profile__name.textContent;
    modal__about.value = profile__about.textContent;
    modal.classList.add("modal__display");
}

function close() {
    modal.classList.remove("modal__display");
}

function submit(evt) {
  evt.preventDefault();
  profile__name.textContent = modal__name.value;
  profile__about.textContent = modal__about.value;
  close();
}

function heart() {
  if(elements.classList.contains('elements__heart_active')){
          elements.classList.remove('elements__heart_active');
          elements.classList.add('elements__heart');
      }else{
          elements.classList.remove('elements__heart');
          elements.classList.add('elements__heart_active');
      }
}

profile__edit.addEventListener("click", open);
modal__close.addEventListener("click", close);
modal__form.addEventListener("submit", submit);
elements__heart.addEventListener("click", heart);