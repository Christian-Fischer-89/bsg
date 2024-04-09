//navigation styling

function check(clsName, me) {
    const elements = document.getElementsByClassName(clsName);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgb(0, 63, 31)";
        elements[i].style.color="white";
        elements[i].style.scale="1";
    }
    document.getElementById(me).style.backgroundColor = "white";
    document.getElementById(me).style.color = "black";
    document.getElementById(me).style.scale = "1.25";
}

//mobile navigation

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

//image upload

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

document.getElementById("gallery").addeventlistener("load", loadImg("test/"));

//Nachrichtenarchiv

function showNews() {
    document.getElementById("news").style.display= "flex";
};

//Nachrichtenarchiv ausblenden

function hideNews() {
    document.getElementById("news").style.display= "none";
    const elements = document.getElementsByTagName("video");
    for (var i = 0; i < elements.length; i++) {
        elements[i].pause();
        elements[i].currentTime = 0;
    }
};