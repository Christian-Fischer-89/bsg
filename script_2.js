function check(clsName, me) {
    elements = document.getElementsByClassName(clsName);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgb(0, 63, 31)";
        elements[i].style.color="white";
        elements[i].style.scale="1";
    }
    document.getElementById(me).style.backgroundColor = "white";
    document.getElementById(me).style.color = "black";
    document.getElementById(me).style.scale = "1.25";
}

const mobNav = document.querySelector(".mob-nav");

mobNav.addEventListener("click", () => {
    const isOpen = mobNav.getAttribute("aria-expanded");
    if (isOpen === "false") {
        mobNav.setAttribute("aria-expanded", "true");
    } else {
        mobNav.setAttribute("aria-expanded", "false");
    }
});