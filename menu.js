// When the user clicks on the hamburger menu
function menuClicked(){
	var nav = document.getElementById("topNav");
	if(nav.className === "topnav"){
		// If the menu is closed, close the menu
		nav.className += " responsive"; // Do NOT forget the space
	}else{
		// If the menu is open, close the menu
		nav.className = "topnav";
	}
}