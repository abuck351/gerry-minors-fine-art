var slideSpeed = 6;
var numSlides = 7;

var auto; // These are the set timeout functions for the slideshow
var next;

// Start on a random image each time
var slideIndex = Math.floor(Math.random() * (numSlides - 0));
var slide = document.getElementById("slide");

// Add all of the images from the slideshow folder into an array
var slides = [];
for(var i = 0; i < numSlides; i++){
	slides[i] = "slideshow/slide" + i + ".jpg";
}

// Set the src of the slide to a random slide
slide.src = slides[slideIndex];

// Wait slideSpeed seconds before starting the slideshow
auto = setTimeout(slideshow, slideSpeed * 1000);


// Functions
// Go to the previous slide
function previousSlide(){
	changeSlide(-1); // Go back a slide
	clearTimeout(next); // Clear the timers
	clearTimeout(auto);
	next = setTimeout(slideshow, slideSpeed * 1000); // Reset the timers
}

// Go to the next slide
function nextSlide(){
	changeSlide(1); // Go forward a slide
	clearTimeout(next); // Clear the timers
	clearTimeout(auto);
	next = setTimeout(slideshow, slideSpeed * 1000); // Reset the timers
}

function changeSlide(direction){
	slideIndex += direction;
	if(slideIndex >= slides.length){
		slideIndex = 0; // Go from slide 7 --> 0
	}
	if(slideIndex < 0){
		slideIndex = slides.length - 1; // Go from slide 0 --> 7
	}
	slide.src = slides[slideIndex]; // Display the current image
}

function slideshow(){
	changeSlide(1); // Move one slide forward
	auto = setTimeout(slideshow, slideSpeed * 1000); // Wait slideSpeed seconds 
}