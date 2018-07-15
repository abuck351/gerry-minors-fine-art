var tranSpeed = 0.3;
var blurAmount = 10;

function openViewer(img, title){
	document.getElementById("viewedImage").src = img; // Set the image
	document.getElementById("picViewer").style.height = "100%"; // Open the overlay
	console.log(title);
	document.getElementById('viewerImageTitle').innerHTML = title;

	// Add the blur effect 
	/*
	var body = document.getElementById("pageBody");
	body.style.webkitFilter = "blur(" + blurAmount + "px)";
	body.style.transition = "all " + tranSpeed + "s";
	*/

	// Prevent scrolling underneath the overlay
	document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
}

function closeViewer(){
	document.getElementById("picViewer").style.height = "0%"; // Close the viewer

	// Remove the blur effect 
	// document.getElementById("pageBody").style.webkitFilter = "none";

	// Reenable scrolling
	document.getElementsByTagName("BODY")[0].style.overflow = "initial";
	document.getElementById("viewedImage").src = "";
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
	if(type == "all"){
		// Show all
		$(".all").css("display", "initial");
		
	}else if(type == "oil"){
		// Hide non-oil
		$(".pencil").css("display", "none");
		$(".penInk").css("display", "none");
		$(".other").css("display", "none");

		// Show oil
		$(".oil").css("display", "initial");

	}else if(type == "pencil"){
		// Hide non-pencil
		$(".oil").css("display", "none");
		$(".penInk").css("display", "none");
		$(".other").css("display", "none");

		// Show pencil
		$(".pencil").css("display", "initial");

	}else if(type == "penInk"){
		// Hide non-penInk
		$(".oil").css("display", "none");
		$(".pencil").css("display", "none");
		$(".other").css("display", "none");

		// Show mixed
		$(".penInk").css("display", "initial");

	}else if(type == "other"){
		// Hide non-other
		$(".oil").css("display", "none");
		$(".pencil").css("display", "none");
		$(".penInk").css("display", "none");

		// Show other
		$(".other").css("display", "initial");

	}else{
		console.log("This type does not exist!");
	}
}