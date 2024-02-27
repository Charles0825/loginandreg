function signuphere() {
  var gridItem = document.querySelector(".grid-item.login");
  var gridForm = document.querySelector(".grid-item.login form");
  gridItem.classList.add("linactive");
  gridForm.classList.add("linactive");

  var gridItem = document.querySelector(".grid-item.register");
  var gridForm = document.querySelector(".grid-item.register form");
  gridItem.classList.remove("rinactive");
  gridForm.classList.remove("rinactive");
}

function loginhere() {
  var gridItem = document.querySelector(".grid-item.register");
  var gridForm = document.querySelector(".grid-item.register form");
  gridItem.classList.add("rinactive");
  gridForm.classList.add("rinactive");

  var gridItem = document.querySelector(".grid-item.login");
  var gridForm = document.querySelector(".grid-item.login form");
  gridItem.classList.remove("linactive");
  gridForm.classList.remove("linactive");
}
