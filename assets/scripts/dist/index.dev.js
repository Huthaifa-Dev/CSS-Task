"use strict";

var sections = document.querySelectorAll("section");
var navLi = document.querySelectorAll("nav ul li");
var main = document.querySelector('.main');
main.addEventListener("scroll", function () {
  var current = "";
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (isInViewport(section)) {
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

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}