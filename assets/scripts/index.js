const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
const main = document.querySelector('.main');
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(sectionTop, sectionHeight);
        // console.log(window.innerHeight, window.innerWidth);
        console.log(sectionTop - sectionHeight / 3, pageXOffset);
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        // console.log(li.classList.contains(`${current}_link`));
        // console.log(li.classList[1])
        // console.log(current);
        if (li.classList.contains(`${current}_link`)) {
            li.classList.add("active");
        }
    });
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    if (element.classList.contains("experience")) {
        console.log(rect.top,
            rect.left,
            rect.bottom, window.innerHeight,
            rect.right
        );
    }
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}