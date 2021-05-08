// Multi-use
const elementsGrid = document.querySelector(".elements-grid");
const modal = document.querySelector(".modal");

// PROFILE
const profileModal = document.querySelector(".modal_profile");
const modalFormProfile = document.querySelector(".modal__form_profile");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about-me");
const modalName = document.querySelector(".modal__info_value_name");
const modalAbout = document.querySelector(".modal__info_value_about-me");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeProfileButton = document.querySelector(".modal__close-icon_profile");

// PLACE
const placeModal = document.querySelector(".modal_place");
const modalFormPlace = document.querySelector(".modal__form_place");
const modalTitle = document.querySelector(".modal__info_value_title");
const modalImageLink = document.querySelector(".modal__info_value_image-link")
const addPlaceButton = document.querySelector(".profile__add-button");
const closePlaceButton = document.querySelector(".modal__close-icon_place");

// IMAGE
const imageModal = document.querySelector(".modal_image");
const imageEnlarge = document.querySelector(".image-popup__enlarge");
const imageCaption = document.querySelector(".image-popup__caption");
const closeImageButton = document.querySelector(".modal__close-icon_image");

// OPEN PROFILE
function openProfile() {
  modalName.value = profileName.textContent;
  modalAbout.value = profileAbout.textContent;
  profileModal.classList.add("modal_toggle");
};

profileEditButton.addEventListener("click", openProfile);

// CLOSE PROFILE
function closeProfile() {
  profileModal.classList.remove("modal_toggle");
};

closeProfileButton.addEventListener("click", closeProfile);

// SUBMIT PROFILE
function submitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = modalName.value;
  profileAbout.textContent = modalAbout.value;
  closeProfile();
}

modalFormProfile.addEventListener("submit", submitProfile);

// OPEN PLACE
function openPlace() {
  modalTitle.value = "";
  modalImageLink.value = "";
  placeModal.classList.add("modal_toggle");
}

addPlaceButton.addEventListener("click", openPlace);

// CLOSE PLACE
function closePlace() {
  placeModal.classList.remove("modal_toggle");
}

closePlaceButton.addEventListener("click", closePlace);

// SUBMIT PLACE

function submitPlace(evt) {
  evt.preventDefault();
  const newPlace = addPlaces(modalTitle.value, modalImageLink.value);
  elementsGrid.prepend(newPlace);
  closePlace();
}

modalFormPlace.addEventListener("submit", submitPlace);

// EXPAND IMAGE

function expand(imageVar) {
  const elementsImage = imageVar.querySelector(".elements__image");
  const elementsText = imageVar.querySelector(".elements__text");

  elementsImage.addEventListener("click", function () {
      imageEnlarge.src = elementsImage.src;
      imageCaption.textContent = elementsText.textContent;
      imageModal.classList.add("modal_toggle");
  });
};

// CLOSE IMAGE

function closeImage() {
  imageModal.classList.remove("modal_toggle");
}

closeImageButton.addEventListener("click", closeImage);

// LIKE IMAGE

function like(likeVar) {
  const likeButton = likeVar.querySelector(".elements__heart");

  likeButton.addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__heart_active");
  });
};

// DELETE IMAGE

function deleted(deleteVar) {
  const deleteButton = deleteVar.querySelector(".elements__delete");

  deleteButton.addEventListener("click", function (evt) {
      evt.target.closest(".elements").remove();
  });
};

// ADDING PLACES

function addPlaces(place, url) {
  const template = document.querySelector("#elements-template").content;
  const templateClone = template.querySelector(".elements").cloneNode(true);
  const templateImage = templateClone.querySelector(".elements__image");
  const templateText = templateClone.querySelector(".elements__text");

  templateText.textContent = place;
  templateImage.src = url;
  templateImage.alt = place;

  like(templateClone);
  deleted(templateClone);
  expand(templateClone);

  return templateClone;
};

// INITIAL PAGE
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

// INITIAL LOAD
initialCards.forEach(item => {
  const addPlace = addPlaces(item.name, item.link);
  elementsGrid.append(addPlace);
});