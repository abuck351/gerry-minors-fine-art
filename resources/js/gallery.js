function openViewer(img, title){
	document.getElementById("viewedImage").src = img; // Set the image
	document.getElementById("picViewer").style.height = "100%"; // Open the overlay
	document.getElementById('viewerImageTitle').innerHTML = title;	

	// Prevent scrolling underneath the overlay
	document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
}

function closeViewer(){
	document.getElementById("picViewer").style.height = "0%"; // Close the viewer

	// Reenable scrolling
	document.getElementsByTagName("BODY")[0].style.overflow = "initial";
	document.getElementById("viewedImage").src = "";
}

// TODO: Allow searching of medium type
function searchImages(){
	var searchBox = document.getElementById("searchBox");
	var searchText = searchBox.value.toUpperCase();
	var panels = document.getElementsByClassName("panel");

	for (var i = 0; i < panels.length; i++){
		var firstP = panels[i].getElementsByTagName("p")[0];
		if (firstP == null){
			continue;
		}

		var title = firstP.innerHTML.toUpperCase();

		if (title.indexOf(searchText) > -1 ){
			panels[i].style.display = "initial";
		}
		else{
			panels[i].style.display = "none";
		}
	}
}