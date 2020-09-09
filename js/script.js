window.onscroll = function() {
	// console.log("działą");
	// id = "#bar"+ 1;
	// x = document.querySelector(id);
	// p = x.getAttribute('data-value');
	// console.log(p);
	// x.style.background = "linear-gradient(90deg, rgba(0,212,255,1)"+p+"%, rgba(255,255,255,1)"+p+"%)";
};

window.onload = progressBar();
function progressBar(){
	for (var i = 1; i <=6 ; i++){

		id = "#bar"+ i;
		x = document.querySelector(id);
		p = x.getAttribute('data-value');
		// console.log(p);
		x.style.background = "linear-gradient(90deg, rgba(0,212,255,1)"+p+"%, rgba(255,255,255,1)"+p+"%)";

	}

}

