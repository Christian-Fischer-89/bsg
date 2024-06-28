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
        window.scrollTo(0, 0);
        mobNav.setAttribute("aria-expanded", "true");
        mobNavbar.setAttribute("style", "display:flex");
    } else {
        mobNav.setAttribute("aria-expanded", "false");
        mobNavbar.setAttribute("style", "display:none");
    }
});

//image upload

const galleries = document.getElementsByClassName("img-grid");
for (var i = 0; i < galleries.length; i++) {
    galleries[i].addeventlistener("load", loadImg(galleries[i].id));
}

function loadImg(path) {
    var gallery = document.querySelectorAll(".img-grid");
    gallery.forEach((div) => {
        for (var i = 1; i <= div.dataset.count; i++) {
        const img = document.createElement("img");
        img.src = "images/Galerie/" + path + "/" + i + ".jpg";
        img.alt = path + " " + i;
        img.className = "myImg";
        div.appendChild(img);
        }
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
<<<<<<< HEAD
var Img2 = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < Img2.length; i++) {
    var Img3 = Img2[i];
    Img3.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
=======
var img2 = document.querySelectorAll(".images");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img2.forEach(item => {
	item.addEventListener('click', event => {
    modal.style.display = "block";
    modalImg.src = item.src;
    captionText.innerHTML = item.alt;
  })
})
>>>>>>> d8a59b2978e7c6f6362aee51707c955f31b91160

//Nachrichtenarchiv einblenden

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

//Historie einblenden

function showHistory() {
    document.getElementById("history").style.display = "flex";
};

//Historie ausblenden

function hideHistory() {
    document.getElementById("history").style.display = "none";
};

//Könige einblenden

function showKings() {
    document.getElementById("Könige").style.display = "flex";
};

//Könige ausblenden

function hideKings() {
    document.getElementById("Könige").style.display = "none";
};

//Festkettenträger einblenden

function showFest() {
    document.getElementById("Festkettenträger").style.display = "flex";
};

//Festkettenträger ausblenden

function hideFest() {
    document.getElementById("Festkettenträger").style.display = "none";
};

//Buschkönige einblenden

function showBusch() {
    document.getElementById("Buschkönige").style.display = "flex";
};

//Buschkönige ausblenden

function hideBusch() {
    document.getElementById("Buschkönige").style.display = "none";
};

//Images einblenden

function showImages() {
    document.getElementById("Images").style.display = "flex";
};

//Images ausblenden

function hideImages() {
    document.getElementById("Images").style.display = "none";
};

//Kontakt einblenden

function showKontakt() {
    document.getElementById("Kontakt").style.display = "flex";
};

//Kontakt ausblenden

function hideKontakt() {
    document.getElementById("Kontakt").style.display = "none";
};
//Impressum einblenden

function showImpressum() {
    document.getElementById("Impressum").style.display = "flex";
};

//Impressum ausblenden

function hideImpressum() {
    document.getElementById("Impressum").style.display = "none";
};

//Datenschutz einblenden

function showDatenschutz() {
    document.getElementById("Datenschutz").style.display = "flex";
};

//Datenschutz ausblenden

function hideDatenschutz() {
    document.getElementById("Datenschutz").style.display = "none";
};

//Danke einblenden

function showDanke() {
    document.getElementById("Danke").style.display = "flex";
};

//Danke ausblenden

function hideDanke() {
    document.getElementById("Danke").style.display = "none";
};

//Modal ausblenden

function hideModal() {
    document.getElementById("myModal").style.display = "none";
};