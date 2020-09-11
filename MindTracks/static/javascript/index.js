// populate range slider, keep hold of slider values and provide play button depending on what the user is using MindTracks for
document.addEventListener("DOMContentLoaded", getSlider);
function getSlider() {
	document.getElementById("mood").onclick = function() {
		let slider = createSlider("moodSlider");
		addSlider(slider);
		sliderValue(slider);
		let pressPlay = createButton("moodButton");
		addButton(pressPlay);
	}

	document.getElementById("activity").onclick = function() {
		let slider = createSlider("activitySlider");
		addSlider(slider);
		sliderValue(slider);
		let pressPlay = createButton("activityButton");
		addButton(pressPlay);
	}
}

// for now, when play button is pressed, it alerts which button and what scale it was pressed at - to use for appropriate playlist
$(document).on("click", "#moodButton", function() {
	alert('Mood' + " " + document.getElementById("range").innerHTML)
})

$(document).on("click", "#activityButton", function() {
	alert('Activity' + " " + document.getElementById("range").innerHTML)
})

// creates and returns a new range slider
function createSlider(type) {
	let slider = document.createElement("input");
	slider.setAttribute("type", "range");
	slider.setAttribute("id", type);
	slider.setAttribute("min", "0");
	slider.setAttribute("max", "6");
	slider.setAttribute("value", "3");
	return slider;
}

// adds the created slider
function addSlider(slider) {
	let rangeSlider = document.getElementById("rangeSlider");
	if (rangeSlider.childNodes[0] === undefined) {
		rangeSlider.appendChild(slider);
	} else {
		rangeSlider.removeChild(document.getElementById("rangeSlider").childNodes[0]);
		rangeSlider.appendChild(slider);
	}
}

// keeps a running track of slider value from 0 to 6 when in use - hidden from user for now
function sliderValue(slider) {
	let range = document.getElementById("range");
	range.innerHTML = slider.value;
	slider.oninput = function() {
		range.innerHTML = this.value;
	}
}

// creates play button
function createButton(type) {
	let pressPlay = document.createElement("button");
	pressPlay.setAttribute("id", type);
	pressPlay.innerHTML = "PLAY";
	return pressPlay;
}

// adds play button
function addButton(pressPlay) {
	if (document.getElementById("playButton").childNodes[0] === undefined) {
		document.getElementById("playButton").appendChild(pressPlay);
	} else {
		document.getElementById("playButton").removeChild(document.getElementById("playButton").childNodes[0]);
		document.getElementById("playButton").appendChild(pressPlay);
	}
}