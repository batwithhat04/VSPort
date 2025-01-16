// let currentSlide = 0;

// Show the specified slide
// function showSlide(index) {
//     const slides = document.querySelector('.slides');
//     const slideCount = document.querySelectorAll('.slide').length;

    // Adjust currentSlide index
   // currentSlide = (index + slideCount) % slideCount; // Wrap around

    // Apply transform to show the current slide
//     const offset = -currentSlide * 100; // Move the slides to the left
//     slides.style.transform = `translateX(${offset}%)`;
// }

// Change the slide based on direction
// function changeSlide(direction) {
//     showSlide(currentSlide + direction);
// }

// Auto slide every 3 seconds
// setInterval(() => {
//     changeSlide(1);
// }, 3000);


// showSlide(currentSlide);


//alt code

let slideIndex = 0;
let slideInterval;

const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const totalSlides = slideItems.length;
const visibleSlides = 4; // Number of slides to show at once

function moveSlide(step) {
    // Calculate the new index based on step
    slideIndex = (slideIndex + step) % totalSlides;
    if (slideIndex < 0) {
        slideIndex = totalSlides - visibleSlides;
    }
    
    // Move the slides by setting transform based on the current index
    const newTransform = -slideIndex * (100 / visibleSlides);
    slides.style.transform = `translateX(${newTransform}%)`;
}

// Automatically slide the images every 3 seconds
function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide(1); // Slide forward
    }, 3000);
}

// Stop the slideshow when arrows are clicked
function stopSlideShow() {
    clearInterval(slideInterval);
}

document.querySelector('.left').addEventListener('click', () => {
    stopSlideShow();
    moveSlide(-1);
    startSlideShow();
});

document.querySelector('.right').addEventListener('click', () => {
    stopSlideShow();
    moveSlide(1);
    startSlideShow();
});

startSlideShow();

//till here.


/**/ 

// $(".carousel .carousel-item").each(function () {
//   var minPerSlide = 5; // Set the desired number of cards. per slide
//   var next = $(this).next();

//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }

//   next.children(":first-child").clone().appendTo($(this));

//   for (var i = 0; i < minPerSlide - 1; i++) {
//     next = next.next();

//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }

//     next.children(":first-child").clone().appendTo($(this));
//   }
// });
// // Get modal and overlay elements
// const modal = document.getElementById("modal");
// const overlay = document.getElementById("overlay");
// const modalImage = document.getElementById("modalImage");

// // Function to open the modal
// function openModal(slideNumber) {
//   modalImage.src = `/carousel-image/image${slideNumber}.jpg`;
//   modal.style.display = "block"; // Changed to "block" to ensure it's visible
//   overlay.style.display = "block";
// }

// function closeModal() {
//   modal.style.display = "none";
//   overlay.style.display = "none";
//   modalImage.src = "";
// }

// // Add event listener to overlay to close modal when clicked
// overlay.addEventListener("click", closeModal);




