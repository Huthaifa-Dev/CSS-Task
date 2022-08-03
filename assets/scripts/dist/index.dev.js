"use strict";

var sections = document.querySelectorAll("section");
var navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", function () {
  var current = "";
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(function (li) {
    li.classList.remove("active");

    if (li.classList.contains("".concat(current, "_link"))) {
      li.classList.add("active");
    }
  });
});