  var wins=0;
  
  document.onkeyup = function(event) {  
    playGame();
  }

function playGame() {
	var guessesLeft = 10;
	var guesses = 0;
	var lettersGuessed = [];
	// var wins = 0;
    var allShows = createArray();
    var blankWord = [];
    var compareWord = [];
    var userGuess = " "

	// var userGuess = null;
	

	var j = Math.floor(Math.random()*allShows.length)
	var showName = allShows[j].show.toUpperCase();
	var showSource = allShows[j].source.toLowerCase();
	
	console.log(showName);
	console.log(showSource);
	
	for (i=0; i<showName.length;i++){

		if (showName[i] == " "){
			blankWord.push('&nbsp');
			compareWord.push(" ");

		}
		else if(showName[i] == ":"){
			blankWord.push(":");
			compareWord.push(":");
		}
		else if(showName[i] == "&"){
			blankWord.push("&");
			compareWord.push("&");
		}
		else if(showName[i] == "-"){
			blankWord.push("-");
			compareWord.push("-");
		}
		else {
			blankWord.push("_");
			compareWord.push("_");
		}
	}

	document.getElementById("wins").innerHTML = wins + "<br>";
	document.getElementById("guessRemain").innerHTML = guessesLeft;
	document.getElementById("word").innerHTML = blankWord.join(" ");
	document.getElementById("guessed").innerHTML = lettersGuessed;

	document.onkeyup = function(event) {
		
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		 // userGuess.indexOf(lettersGuessed);
		console.log(event.keyCode);
		if (event.keyCode < 65 || event.keyCode > 90  ) {
			console.log("invalid character");
    		}

		else if (showName.indexOf(userGuess) >=0 ) {
		  for (i=0; i<showName.length;i++){
		  	if (showName[i] == userGuess){
		  		blankWord[i] = userGuess;
		  		compareWord[i] = userGuess;
		  	} // end if inside for
		  }  // end for loop
		} //end else if 
		else if (lettersGuessed.indexOf(userGuess) >=0) {
			console.log("already guessed");
		}
		else{
		  lettersGuessed.push(userGuess);
		  guesses+=1;
		  guessesLeft -= 1;
		  var audio = new Audio('assets/channel-change.wav');
		  audio.play();
		  // console.log(guesses);
		}

		document.getElementById("wins").innerHTML = wins +"<br>";
		document.getElementById("guessRemain").innerHTML = guessesLeft +"<br>";
		document.getElementById("word").innerHTML = blankWord.join(" ") +"<br>";  
		document.getElementById("guessed").innerHTML = lettersGuessed;
		// console.log(userGuess);

	  	if (guessesLeft <= 0) {
	  		alert("You Lost");
	  		document.onkeyup = function(event) {
				playGame();
			}
		}

		if (compareWord.join('') == showName) {
			
			wins += 1;
			var audio = new Audio('assets/game-win.mp3');
		  	audio.play();
			document.getElementById("TV").src="assets/images/showIMG/" +  showSource;
			document.onkeyup = function(event) {
				playGame();
			}
		}
	}
}
function createArray() {

	var listOfShows = [
		{show: "Spider-Man: The Animated Series", source: "Spider-Man The Animated Series.jpg"},
		{show: "Game of Thrones", source: "game-of-thrones.jpg"},
		{show: "Agents of SHIELD", source: "agents-of-shield.jpg"},
		{show: "Arrow", source: "arrow.jpg"},
		{show: "MacGyver", source: "macgyver.jpg"},
		{show: "The Big Bang Theory", source: "big-bang-theory.jpg"},
		{show: "Greys Anatomy", source: "greys-anatomy.jpg"},
		{show: "Coronation Street", source: "coronation-street.jpg"},
		{show: "Vampire Diaries", source: "vampire-diaries.jpg"},
		{show: "Supernatural", source: "supernatural.jpg"},
		{show: "How I Met Your Mother", source: "how-i-met-your-mother.jpg"},
		{show: "Once Upon a Time", source: "once-upon-a-time.jpg"},
		{show: "The Blacklist", source: "the-blacklist.jpg"},
		{show: "The Mentalist", source: "the-mentalist.jpg"},
		{show: "Criminal Minds", source: "criminal-minds.jpg"},
		{show: "Castle", source: "castle.jpg"},
		{show: "Revenge", source: "revenge.jpg"},
		{show: "The Good Wife", source: "the-good-wife.jpg"},
		{show: "NCIS", source: "ncis.jpg"},
		{show: "Vikings", source: "vikings.jpg"},
		{show: "Bones", source: "bones.jpg"},
		{show: "Community", source: "community.jpg"},
		{show: "Black Sails", source: "black-sails.jpg"},
		{show: "Modern Family", source: "modern-family.jpg"},
		{show: "Reign", source: "reign.jpg"},
		{show: "Person of Interest", source: "person-of-interest.jpg"},
		{show: "The Walking Dead", source: "the-walking-dead.jpg"},
		{show: "The Americans", source: "the-americans.jpg"},
		{show: "Parks and Recreation", source: "parks-and-recs.jpg"},
		{show: "White Collar", source: "white-collar.jpg"},
		{show: "The Following", source: "the-following.jpg"},
		{show: "NCIS: Los Angeles", source: "ncis-la.jpg"},
		{show: "Suits", source: "suits.jpg"},
		{show: "The Simpsons", source: "the-simpsons.jpg"},
		{show: "Mad Men", source: "mad-men.jpg"},
		{show: "Family Guy", source: "family-guy.jpg"},
		{show: "Law & Order: Special Victims Unit", source: "law-and-order-svu.jpg"},
		{show: "Glee", source: "glee.jpg"},
		{show: "CSI: Crime Scene Investigation", source: "csi-crime-scene-investigation.jpg"},
		{show: "Hawaii Five-O", source: "hawaii-five-o.jpg"},
		{show: "Sesame Street", source: "sesame-street.jpg"},
		{show: "The Bold and the Beautiful", source: "bold-and-beautiful.jpg"},
		{show: "Two and a Half Men", source: "two-and-a-half-men.jpg"},
		{show: "Breaking Bad", source: "breaking-bad.jpg"},
		{show: "Survivor", source: "survivor.jpg"},
		{show: "Friends", source: "friends.jpg"},
		{show: "Burn Notice", source: "burn-notice.jpg"},
		{show: "Today Show", source: "today-show.jpg"},
		{show: "True Blood", source: "true-blood.jpg"},
		{show: "South Park", source: "south-park.jpg"},
		{show: "Sons of Anarchy", source: "sons-of-anarchy.jpg"},
		{show: "American Horror Story", source: "american-horror-story.jpg"},
		{show: "CBS Evening News", source: "cbs-evening-news.jpg"},
		{show: "Chicago Fire", source: "chicago-fire.jpg"},
		{show: "Fargo", source: "fargo.jpg"},
		{show: "Archer", source: "archer.jpg"},
		{show: "New Girl", source: "new-girl.jpg"},
		{show: "The X-Files", source: "x-files.jpg"},
		{show: "Parenthood", source: "parenthood.jpg"},
		{show: "Lost", source: "lost.jpg"},
		{show: "One Tree Hill", source: "one-tree-hill.jpg"},
		{show: "Californication", source: "californication.jpg"},
		{show: "Saturday Night Live", source: "saturday-night-live.jpg"},
		{show: "House", source: "house.jpg"},
		{show: "Psych", source: "psych.jpg"},
		{show: "Doctor Who", source: "doctor-who.jpg"},
		{show: "Smallville", source: "smallville.jpg"},
		{show: "The Young and the Restless", source: "young-and-restless.jpg"},
		{show: "CSI: Miami", source: "csi-miami.jpg"},
		{show: "The Amazing Race", source: "the-amazing-race.jpg"},
		{show: "Two Broke Girls", source: "2-broke-girls.jpg"},
		{show: "Sex and the City", source: "sex-and-the-city.jpg"},
		{show: "House Hunters", source: "house-hunters.jpg"},
		{show: "Gilmore Girls", source: "gilmore-girls.jpg"},
		{show: "Downton Abbey", source: "downton-abbey.jpg"},
		{show: "SpongeBob SquarePants", source: "spongebob-squarepants.jpg"},	
		];
	return listOfShows;
}

