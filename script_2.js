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
const mobNavbar = document.querySelector(".mob-navbar");

mobNav.addEventListener("click", () => {
    const isOpen = mobNav.getAttribute("aria-expanded");
    if (isOpen === "false") {
        mobNav.setAttribute("aria-expanded", "true");
        mobNavbar.setAttribute("style", "display:flex");
    } else {
        mobNav.setAttribute("aria-expanded", "false");
        mobNavbar.setAttribute("style", "display:none");
    }
});

function loadImg(path) {
    var gallery = document.querySelectorAll(".img-grid");
    gallery.forEach((div) => {
        for (var i = 1; i <= div.dataset.count; i++) {
        const img = document.createElement("img");
        img.src = "images/" + path + i + ".jpg";
        img.alt = path + " " + i;
        div.appendChild(img);
        }
    });
}

function loadImg(path) {
    var gallery = document.querySelectorAll(".img-grid");
    gallery.forEach((div) => {
        for (var i = 1; i <= div.dataset.count; i++) {
        const img = document.createElement("img");
        img.src = "images/" + path + i + ".jpg";
        img.alt = path + " " + i;
        img.style.width = "100%";
        div.appendChild(img);
        }
    });
}

document.getElementById("gallery").addeventlistener("load", loadImg("test/"));