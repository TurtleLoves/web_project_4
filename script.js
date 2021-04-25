let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about-me");
let profileEdit = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let modalName = document.querySelector(".modal__info_key_name");
let modalAbout = document.querySelector(".modal__info_key_about-me");
let Close = document.querySelector(".close-icon");
let modalForm = document.querySelector(".modal__form");
// let elements = document.querySelector(".elements");
// let elements__heart = document.querySelector(".elements__heart");
// const hearts = Array.from(document.querySelectorAll(".elements__heart"));

function open() {
    modalName.value = profileName.textContent;
    modalAbout.value = profileAbout.textContent;
    modal.classList.add("modal_toggle");
}

function close() {
    modal.classList.remove("modal_toggle");
}

function submit(evt) {
  evt.preventDefault();
  profileName.textContent = modalName.value;
  profileAbout.textContent = modalAbout.value;
  close();
}

// function toggleHeart(evt) {
//   evt.target.classList.toggle("elements__heart_active");
// }

profileEdit.addEventListener("click", open);
Close.addEventListener("click", close);
modalForm.addEventListener("submit", submit);

// for (const heart of hearts) {
//     heart.addEventListener("click", toggleHeart);
// }