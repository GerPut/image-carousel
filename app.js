let slideIndex = 0;
let timer;
const myImages = [
    {
        "img": "./images/desert4.jpg",
        "caption": "Desert"
    },
    {
        "img": "./images/desert2.jpeg",
        "caption": "Plants"
    },
    {
        "img": "./images/desert3.jpeg",
        "caption": "Travel"
    },
]


slider();

function slider() {
    for (let x = 0; x < myImages.length; x++) {
        let slide = document.createElement("div");
        slide.setAttribute("class", "mySlide fade");
        let img = document.createElement("img");
        img.setAttribute("src", myImages[x].img);
        img.style.width = '500px'
        let cap = document.createElement("div");
        cap.classList.add("caption");
        cap.innerText = myImages[x].caption;
        slide.appendChild(img);
        slide.appendChild(cap);
        document.querySelector(".image-container").appendChild(slide);
        let span = document.createElement("span");
        span.classList.add("circle");
        span.addEventListener("click", function () {
            moveSlide(x);
        })
        document.querySelector(".indicator").appendChild(span);
    }
    playSlides();
}

function playSlides() {
    const slides = document.querySelectorAll(".mySlide");
    const dots = document.querySelectorAll(".circle");
    const active = document.querySelector(".active");
    if (active != null) {
        active.classList.remove("active");
    }
    if (slideIndex + 1 > slides.length) {
        slideIndex = 0;
    }
    slides.forEach(function (element) {
        element.style.display = "none";
    })
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
    slideIndex++;
    timer = setTimeout(playSlides, 3000);
}

function moveSlide(num) {
    slideIndex = num;
    clearTimeout(timer);
    playSlides();
}