// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// Sends the user to the origin link of where the image is stored
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// Passes 1 to the navigate function, which changes the photo based off of index in an array.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // Makes it so that when you click on the buttons you don't also get the function where it opens the image in another page.
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// Same as previous
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // When you click on the previous button you would also trigger the carousel click event.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
