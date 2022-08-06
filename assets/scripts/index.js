const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
const main = document.querySelector('.main');
// main.addEventListener("scroll", () => {
//     let current = "";
//     sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         console.log(sectionTop + " " + sectionHeight);
//         if (isInViewport(section)) {
//             current = section.getAttribute("id");
//         }
//     });

//     navLi.forEach((li) => {
//         li.classList.remove("active");
//         if (li.classList.contains(`${current}_link`)) {
//             li.classList.add("active");
//         }
//     });
// });
main.addEventListener("scroll", function () {
    var current = "";
    sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
            console.log("Current: " + current);
        }
    });
    navLi.forEach(function (li) {
        li.classList.remove("active");

        if (li.classList.contains(`${current}_link`)) {
            li.classList.add("active");
        }
    });
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
