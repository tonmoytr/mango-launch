// let header = document.querySelector(".navbar")
// window.onscroll = (e)=> {
//    if (window.pageYOffset > 100) {
//       header.style.backgroundColor= "#911616";
//     } else{
//       header.style.backgroundColor = "transparent";
//     }
//  }


// const navbarToggle = document.querySelector(".navbar-toggle");
// const navbarLinks = document.querySelector(".center-menu");

// navbarToggle.addEventListener("click", () => {
//   navbarToggle.classList.toggle("active");
//   navbarLinks.classList.toggle("active");
// });


var coll = document.getElementsByClassName("question");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
window.onload = function() {
    const images = document.querySelectorAll('.drop-image');

    images.forEach(image => {
        setRandomPosition(image);
        setInterval(() => {
            setRandomPosition(image);
        }, 5000); // Adjust timing as needed
    });
}

function setRandomPosition(image) {
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    image.style.left = randomLeft + 'px';
}



// const navbarToggle1 = document.querySelector(".drop");
// const navbarLinks1 = document.querySelector(".dropdown-content");

// navbarToggle1.addEventListener("mouseover", () => {
//   navbarToggle1.classList.toggle("active");
//   navbarLinks1.classList.toggle("active");
// });



// var dropdowns = document.getElementsByClassName("dropdown");
// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.querySelector(".dropdown-content");
//     if (dropdownContent.style.display === "flex") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "flex";
//     }
//   });
// }