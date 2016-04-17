  var wins=0;
  document.onkeyup = function(event) {
    
    
    playGame();
  }

function playGame() {
	var guessesLeft = 15;
	var guesses = 0;
	var lettersGuessed = [];
	// var wins = 0;
    var allShows = createArray();
    var blankWord = [];
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

		}
		else if(showName[i] == ":"){
			blankWord.push(":");
		}
		else if(showName[i] == "-"){
			blankWord.push("-");
		}
		else {
			blankWord.push("_");
		}
	}

	document.getElementById("wins").innerHTML = wins + "<br>";
	document.getElementById("guessRemain").innerHTML = guessesLeft;
	document.getElementById("word").innerHTML = blankWord.join(" ");
	document.getElementById("guessed").innerHTML = lettersGuessed;

	
	document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		userGuess.indexOf(lettersGuessed);

		if (showName.indexOf(userGuess) >=0 ) {
		  for (i=0; i<showName.length;i++){
		  	if (showName[i] == userGuess){
		  		// console.log(userGuess + "in SHOWNAME");
		  		blankWord[i] = userGuess;
		  	}
		  }
		}
		else if (lettersGuessed.indexOf(userGuess) >=0) {
			// console.log("already guessed: " + userGuess);
			// console.log(lettersGuessed);
		}
		else{
		  lettersGuessed.push(userGuess);
		  guesses+=1;
		  guessesLeft -= 1;
		  // console.log(guesses);
		}

		document.getElementById("wins").innerHTML = wins +"<br>";
		document.getElementById("guessRemain").innerHTML = guessesLeft +"<br>";
		document.getElementById("word").innerHTML = blankWord.join(" ") +"<br>";  
		document.getElementById("guessed").innerHTML = lettersGuessed;
		// console.log(userGuess);

	  	if (guessesLeft <= 0) {
	  		alert("You Lost");
	  		playGame();
		}
		//console.log(showName, blankWord.join(''));
		if (blankWord.join('') == showName) {
			alert("Congrats, you win");
			wins += 1;
			document.getElementById("TV").src="assets/images/showIMG/" +  showSource;
			playGame();
			// Change image to showname??
		}
	}
}
function createArray() {

	var listOfShows = [
		{show: "Spider-Man: The Animated Series", source: "Spider-Man The Animated Series.jpg"},
		{show: "Game of Thrones", source: "game of thrones"},
		{show: "Agents of SHIELD", source: "agents-of-shield"},
		{show: "Arrow", source: "arrow"},
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
		{show: "The Good Wife", source: "the-good-wife"},
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
		{show: "Parks and Recreation", source: ""},
		{show: "White Collar", source: ""},
		{show: "The Following", source: ""},
		{show: "NCIS: Los Angeles", source: ""},
		{show: "Suits", source: ""},
		{show: "The Simpsons", source: ""},
		{show: "Mad Men", source: ""},
		{show: "Family Guy", source: ""},
		{show: "Law & Order: Special Victims Unit", source: ""},
		{show: "Glee", source: ""},
		{show: "CSI: Crime Scene Investigation", source: ""},
		{show: "Hawaii Five-O", source: ""},
		{show: "", source: ""},
		{show: "Sesame Street", source: ""},
		{show: "The Bold and the Beautiful", source: ""},
		{show: "Two and a Half Men", source: ""},
		{show: "Breaking Bad", source: ""},
		{show: "Survivor", source: ""},
		{show: "Friends", source: ""},
		{show: "Burn Notice", source: ""},
		{show: "Today Show", source: ""},
		{show: "True Blood", source: ""},
		{show: "South Park", source: ""},
		{show: "Sons of Anarchy", source: ""},
		{show: "American Horror Story", source: ""},
		{show: "CBS Evening News", source: ""},
		{show: "Chicago Fire", source: ""},
		{show: "Fargo", source: ""},
		{show: "Archer", source: ""},
		{show: "New Girl", source: ""},
		{show: "The X-Files", source: ""},
		{show: "Parenthood", source: ""},
		{show: "Lost", source: ""},
		{show: "One Tree Hill", source: ""},
		{show: "Californication", source: ""},
		{show: "Saturday Night Live", source: ""},
		{show: "House", source: ""},
		{show: "Psych", source: ""},
		{show: "Doctor Who", source: ""},
		{show: "Smallville", source: ""},
		{show: "The Young and the Restless", source: ""},
		{show: "CSI: Miami", source: ""},
		{show: "The Amazing Race", source: ""},
		{show: "2 Broke Girls", source: ""},
		{show: "Sex and the City", source: ""},
		{show: "House Hunters", source: ""},
		{show: "Gilmore Girls", source: ""},
		{show: "Downton Abbey", source: ""},
		{show: "SpongBob SquarPants", source: ""},	
		];
	return listOfShows;
}

