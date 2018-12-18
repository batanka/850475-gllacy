var link = document.querySelector(".contacts-info-btn");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".feedback-close");

var divModal = document.createElement("div");

// Открытие/закрытие модального окна по клику
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");

//Создание подложки для модального окна
  divModal.className = "modal-feedback-wrapper";
  document.body.appendChild(divModal);

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  document.body.removeChild(divModal);

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
      document.body.removeChild(divModal);
    }
  }
});
