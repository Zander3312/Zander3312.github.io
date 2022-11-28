// Create your global variables below:
var tracklist = ["Let's Go Up", "Shield", "Not Alone", "Concrete Evidence", "Freedom", "Brave", "A Root out of Dry Ground", "Lawgiver", "Disciples", "A Tender Plant"];
var volLevels = [];
const DEFAULT_COLOR = 'rgb(95, 147, 154)'

//Retrieve element nodes from DOM
var switchBtn = document.getElementById('switch-btn');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var volumeUpBtn = document.getElementById('volume-up');
var volumeDownBtn = document.getElementById('volume-down');
var playerTime = document.getElementById("player-time");
var timeElapsed = document.getElementById("time-elapsed");
currentSong = document.getElementById("player-song-name");


function init() {
	for (let i = 0; i < 6; i++) {
    volLevels.push(document.getElementById(`vl${i}`)); //Add volume levels to list of volume levels
    if (i < 3) {
      volLevels[i].classList.add("colored-volume-level"); //If it's one of the first three, add the class that colors in the volume level
    }
  }
};

function volUp() {
	if (volLevels[5].classList.contains("colored-volume-level")) {
    return; //If the last volume level is colored already, don't do anything; max volume
  }
  for (let i = 0; i < 5; i++) {
    if (volLevels[4-i].classList.contains("colored-volume-level")) {
      volLevels[4-i+1].classList.add("colored-volume-level"); //If a volume level before the last one is colored, color in the next one and return
      return;
    }
  }
  volLevels[0].classList.add("colored-volume-level"); //Color in first volume level if no others are colored
}

function volDown() {
  if (!volLevels[0].classList.contains("colored-volume-level")) {
    return; //If the first volume level is not colored, don't do anything; minimum volume
  }
  for (let i = 1; i < 6; i++) {
    if (!volLevels[i].classList.contains("colored-volume-level")) {
      volLevels[i-1].classList.remove("colored-volume-level"); //If a volume level after the first one is not colored, remove color from the previous one and return
      return;
    }
  }
  volLevels[5].classList.remove("colored-volume-level"); //Remove color from last volume level if all others are colored
}

function incrementTime() {
  if (playerTime.value === playerTime.max) {
    nextSong(); //Call nextSong() if the range's value reaches its max
  }
  playerTime.value++; //Increment range's value
  timeElapsed.innerHTML = secondsToMs(playerTime.value); //Update elapsed time
}

function switchPlay() {
	if (switchBtn.innerHTML == `<i class="material-icons">play_arrow</i>`) { //When play is chosen
    switchBtn.innerHTML = `<i class="material-icons">pause</i>`; //Change icon to pause
    timeInterval = setInterval(incrementTime, 1000); //Call incrementTime function every second
  } else { //When pause is chosen
    switchBtn.innerHTML = `<i class="material-icons">play_arrow</i>`; //Change icon to play
    clearInterval(timeInterval); //Stop counting time, the player is paused
  }
}

function nextSong() {
	if (currentSong.innerHTML == tracklist[9]) {
    currentSong.innerHTML = tracklist[0]; //If current song is the last song, go back to first song
  } else {
    for (let i = 0; i < tracklist.length-1; i++) {
      if (currentSong.innerHTML == tracklist[i]) {
        currentSong.innerHTML = tracklist[i+1]; //Loop through tracklist, if current track matches a track in the list, change to the track after that one
        break;
      }
    }
  }
  playerTime.value = 0; //Set time values to 0
  timeElapsed.innerHTML = secondsToMs(0);
}

function prevSong() {
  if (currentSong.innerHTML == tracklist[0]) {
    currentSong.innerHTML = tracklist[9]; //If current song is the first song, go to the last song
  } else {
    for (let i = 1; i < tracklist.length; i++) {
      if (currentSong.innerHTML == tracklist[i]) {
        currentSong.innerHTML = tracklist[i-1]; //Loop through tracklist, if current track matches a track in the list, change to the track before that one
      }
    }
  }
  playerTime.value = 0; //Set time values to 0
  timeElapsed.innerHTML = secondsToMs(0);
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);
    console.log(`00${sec}`);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

switchBtn.addEventListener('click', switchPlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
volumeUpBtn.addEventListener('click', volUp);
volumeDownBtn.addEventListener('click', volDown);



init();
