var email = 'gerryminor@sbcglobal.net';

function send(){
	subject = document.getElementById('subject').value;
	body = document.getElementById('message').value;
	window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
}