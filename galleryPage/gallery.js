var tranSpeed = 0.3;
var blurAmount = 10;

function openViewer(img){
	document.getElementById("viewedImage").src = img; // Set the image
	document.getElementById("picViewer").style.height = "100%"; // Open the overlay

	// Add the blur effect 
	var body = document.getElementById("pageBody");
	body.style.webkitFilter = "blur(" + blurAmount + "px)";
	body.style.transition = "all " + tranSpeed + "s";

	// Prevent scrolling underneath the overlay
	document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
}

function closeViewer(){
	document.getElementById("picViewer").style.height = "0%"; // Close the viewer

	//Remove the blur effect 
	document.getElementById("pageBody").style.webkitFilter = "none";

	// Reenable scrolling
	document.getElementsByTagName("BODY")[0].style.overflow = "initial";
}

var type = "all"; // The default type of drawing
function getType(){
	var types = document.getElementsByName("type");
	for(var i = 0; i < types.length; i++){
		// If a radio is checked
		if(types[i].checked){
			// Don't apply same filter 2 times in a row
			if(types[i].value != type){
				type = types[i].value;
				filter(type); // Call a function filtering the drawings
			}

			//Since only one radio can be checked at a time, break
			break;
		}
	}
}

function filter(type){
	// Get all of the images with these class names
	var all = document.getElementsByClassName("all");
	var oil = document.getElementsByClassName("oil");
	var pencil = document.getElementsByClassName("pencil");
	var penInk = document.getElementsByClassName("penInk");

	if(type == "all"){
		// Show all
		$(".all").css("display", "initial");
		
	}else if(type == "oil"){
		// Hide non-oil
		$(".pencil").css("display", "none");
		$(".penInk").css("display", "none");

		// Show oil
		$(".oil").css("display", "initial");

	}else if(type == "pencil"){
		// Hide non-pencil
		$(".oil").css("display", "none");
		$(".penInk").css("display", "none");

		// Show pencil
		$(".pencil").css("display", "initial");

	}else if(type == "penInk"){
		// Hide non-pen
		$(".oil").css("display", "none");
		$(".pencil").css("display", "none");

		// Show pen
		$(".penInk").css("display", "initial");

	}else{
		console.log("This type does not exist!");
	}
}