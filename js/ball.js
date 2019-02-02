let ball = document.getElementById("ball");

ball.addEventListener("click", function(event) {
	event.preventDefault;
	// ball jumps back to the top, need to click once more to drop it
	// ball.classList.toggle("falling");
	
	// ball falls down after first click
	// -> removing the class
	ball.classList.remove("falling");
	// -> triggering reflow /* The actual magic */
	// without this the animation won't be retriggered.
	void ball.offsetWidth;
	// -> and re-adding the class
	ball.classList.add("falling");
	// https://css-tricks.com/restart-css-animation/
});