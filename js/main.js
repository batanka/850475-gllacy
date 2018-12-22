var link = document.querySelector(".contacts-info-btn");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".feedback-close");

var divModal = document.createElement("div");

var form = popup.querySelector("form");
var feedbackName = popup.querySelector("[name=feedback-name]");
var feedbackEmail = popup.querySelector("[name=feedback-email]");
var feedbackComment = popup.querySelector("[name=feedback-comment]");

// Открытие/закрытие модального окна по клику
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");

//Создание подложки для модального окна
  divModal.className = "modal-feedback-wrapper";
  document.body.appendChild(divModal);

});

form.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackComment.value) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-feedback-error");
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  popup.classList.remove("modal-feedback-error");
  document.body.removeChild(divModal);

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
      popup.classList.remove("modal-feedback-error");
      document.body.removeChild(divModal);
    }
  }
});
