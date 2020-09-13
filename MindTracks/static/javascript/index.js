// populate range slider, keep hold of slider values and provide play button depending on what the user is using MindTracks for
document.addEventListener("DOMContentLoaded", getSlider);
function getSlider() {
	document.getElementById("mood").onclick = function() {
		let slider = createSlider("moodSlider");
		addSlider(slider);
		sliderValue(slider);
		spotifyLogin();
		createForm("moodButton");
//     	let pressPlay = createButton("moodButton");
//		addButton(pressPlay);
	}

	document.getElementById("activity").onclick = function() {
		let slider = createSlider("activitySlider");
		addSlider(slider);
		sliderValue(slider);
		spotifyLogin();
		let pressPlay = createButton("activityButton");
		addButton(pressPlay);
	}
}

// for now, when play button is pressed, it alerts a random playlist based on mood/active and slider
$(document).on("click", "#moodButton", function() {
	playlist = getPlaylist('mood')
	spotifyWindow(playlist)


})

$(document).on("click", "#activityButton", function() {
	playlist = getPlaylist('activity')
	spotifyWindow(playlist)
})

// creates and returns a new range slider
function createSlider(type) {
	let slider = document.createElement("input");
	slider.setAttribute("type", "range");
	slider.setAttribute("id", type);
	slider.setAttribute("min", "0");
	slider.setAttribute("max", "4");
	slider.setAttribute("value", "2");
	return slider;
}

// adds the created slider
function addSlider(slider) {
	if (slider.id === "moodSlider") {
		document.getElementById("sliderQuestion").innerHTML = "On a scale from 1 to 5, from anxious/gloomy to elated, what is your current mood?";
	} else if (slider.id === "activitySlider") {
		document.getElementById("sliderQuestion").innerHTML = "On a scale from 1 to 5, from chill to high intensity, what activity level are you looking for?";
	}
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

// create mood form
function createForm(type){
    let new_form = document.createElement("form")
    new_form.setAttribute("action", "add_user_data/")
    new_form.setAttribute("method", "POST")
    new_form.setAttribute("id", "form")
    let new_button = createButton(type)
    new_button.setAttribute("type", "submit")
//    console.log(document.getElementBy(new_form))
    if (document.getElementById("playButton").childNodes[0] === undefined) {
		document.getElementById("playButton").appendChild(new_form);
	} else {
		document.getElementById("playButton").removeChild(document.getElementById("playButton").childNodes[0]);
		document.getElementById("playButton").appendChild(new_form);
    }
    if (document.getElementById("form").childNodes[0] === undefined) {
		document.getElementById("form").appendChild(new_button);
	} else {
		document.getElementById("form").removeChild(document.getElementById("form").childNodes[0]);
		document.getElementById("form").appendChild(pressPlay);
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

// adds spotify login link
function spotifyLogin() {
	if (document.getElementById("spotifyLogin").childNodes[0] === undefined) {
		document.getElementById("spotifyLogin").innerHTML += "Make sure you are logged into "
		let spotifyLink = document.createElement("a");
		spotifyLink.href = "https://accounts.spotify.com/en/login/?continue=https:%2F%2Fwww.spotify.com%2Fapi%2Fgrowth%2Fl2l-redirect&_locale=en-US";
		spotifyLink.textContent = "Spotify";
		spotifyLink.target = "_blank";
		spotifyLink.id = "spotifyLink";
		document.getElementById("spotifyLogin").appendChild(spotifyLink);
		}
	}
// creates random int
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// gets random playlist based on users selection
function getPlaylist(plType){
    let userMood = document.getElementById("range").innerHTML
	return playlists[(plType)][userMood][getRandomInt(3)]
}

// create embed window
function spotifyWindow(playlist) {
    document.getElementById("playButton").innerHTML  =""
	document.getElementById("rangeSlider").innerHTML = ""
	document.getElementById("sliderQuestion").innerHTML = ""
	document.getElementById("playButton").innerHTML = '<iframe src="' + playlist + '"width="300" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

}

const playlists = {
	    'mood': {
	    '0': ["https://open.spotify.com/embed/playlist/37i9dQZF1DWYGZAMYFDM8S","https://open.spotify.com/embed/playlist/37i9dQZF1DWUPAFOWtSz6P", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0611i4oGheJ" ],
	    '1': ["https://open.spotify.com/embed/playlist/37i9dQZF1DXci7j0DJQgGp", "https://open.spotify.com/embed/playlist/37i9dQZF1DWUvHZA1zLcjW", "https://open.spotify.com/embed/playlist/37i9dQZF1DWU0ScTcjJBdj"],
	    '2': ["https://open.spotify.com/embed/playlist/37i9dQZF1DXbIGqYf7WDxP","https://open.spotify.com/embed/playlist/37i9dQZF1DWT7XSlwvR1ar","https://open.spotify.com/embed/playlist/37i9dQZF1DXaXDsfv6nvZ5"],
	    '3': ["https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0","https://open.spotify.com/embed/playlist/37i9dQZF1DX7KNKjOK0o75","https://open.spotify.com/embed/playlist/37i9dQZF1DWU13kKnk03AP"],
	    '4': ["https://open.spotify.com/embed/playlist/37i9dQZF1DWSf2RDTDayIx","https://open.spotify.com/embed/playlist/37i9dQZF1DWSXBu5naYCM9","https://open.spotify.com/embed/playlist/37i9dQZF1DX2SK4ytI2KAZ "]
	    },
	    'activity': {
	    '0': ["https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m ","https://open.spotify.com/embed/playlist/37i9dQZF1DXdVyc8LtLi96", "https://open.spotify.com/embed/playlist/37i9dQZF1DX7R7Bjxm48PR" ],
	    '1': ["https://open.spotify.com/embed/playlist/37i9dQZF1DWTofcvJ2Dvma", "https://open.spotify.com/embed/playlist/37i9dQZF1DX3PKEfo9uS5R", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXUtxBFupUW9"],
	    '2': ["https://open.spotify.com/embed/playlist/37i9dQZF1DXaRL7xbcDl7X","https://open.spotify.com/embed/playlist/37i9dQZF1DWUxdwkOJZYCJ","https://open.spotify.com/embed/playlist/37i9dQZF1DX9BXb6GsGCLl "],
	    '3': ["https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh","https://open.spotify.com/embed/playlist/37i9dQZF1DXdMm3yYbD7IO ","https://open.spotify.com/embed/playlist/37i9dQZF1DXadOVCgGhS7j"],
	    '4': ["https://open.spotify.com/embed/playlist/37i9dQZF1DX8gmkqVvLjKg","https://open.spotify.com/embed/playlist/37i9dQZF1DWXTcPFeNCMUP","https://open.spotify.com/embed/playlist/37i9dQZF1DWZYWNM3NfvzJ"]
	    }
}