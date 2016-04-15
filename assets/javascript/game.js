function playGame(wins, allShows, blankWord) {
	var guessesLeft = 15;
	var guesses = 0;
	var lettersGuessed = "";
	
	var userGuess = null;
	


	var showName = allShows[Math.floor(Math.random()*allShows.length)].toUpperCase();
	
	console.log(showName);
	
	for (i=0; i<showName.length;i++){

		if (showName[i] == " "){
			blankWord += "       ";
		}
		else {
			blankWord += "__ ";
		}
	}

	document.getElementById("wins").innerHTML = wins;
	document.getElementById("guessRemain").innerHTML = guessesLeft;
	document.getElementById("word").innerHTML = blankWord;  
	document.getElementById("guessed").innerHTML = lettersGuessed;
	console.log(blankWord);
	
	document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		if (showName.indexOf(userGuess) >=0 ) {
		  for (i=0; i<showName.length;i++){
		  	if (showName[i] == userGuess){
		  		console.log(userGuess + "in SHOWNAME");
		  	}

		  }
		}
		else if (lettersGuessed.indexOf(userGuess)) {
			console.log("already guessed" + userGuess);
			
		}
		else{
		  lettersGuessed += userGuess;
		  guesses+=1;
		  guessesLeft -= 1;
		  // console.log(guesses);
		}

		document.getElementById("wins").innerHTML = wins +"<br>";
		document.getElementById("guessRemain").innerHTML = guessesLeft +"<br>";
		document.getElementById("word").innerHTML = blankWord +"<br>";  
		document.getElementById("guessed").innerHTML = lettersGuessed;
		// console.log(userGuess);

	  	if (guessesLeft <= 0) {
	  		alert("You Lost");
		}
	}
}
function createArray() {

	var listOfShows = ['Game of Thrones',
	'Arrow',
	'Agents of SHIELD',
	'Greys Anatomy',
	'Coronation Street',
	'The Vampire Diaries',
	'The Big Bang Theory',
	'Supernatural',
	'How I Met Your Mother',
	'Once Upon a Time',
	'Criminal Minds',
	'The Blacklist',
	'The Mentalist',
	'The Good Wife',
	'NCIS',
	'Vikings',
	'Castle',
	'Revenge',
	'Bones',
	'Community',
	'Black Sails',
	'Modern Family',
	'Reign',
	'Person of Interest',
	'The Walking Dead',
	'The Americans',
	'Parks and Recreation',
	'White Collar',
	'The Following',
	'NCIS: Los Angeles',
	'Suits',
	'The Simpsons',
	'Mad Men',
	'The Originals',
	'Elementary',
	'Family Guy',
	'Scandal',
	'Law & Order: Special Victims Unit',
	'Glee',
	'The Tomorrow People',
	'Salem',
	'Hannibal',
	'CSI: Crime Scene Investigation',
	'Hawaii Five-O',
	'Sesame Street',
	'The Bold and the Beautiful',
	'Two and a Half Men',
	'Hart of Dixie',
	'Breaking Bad',
	'Nashville',
	'Pretty Little Liars',
	'Survivor',
	'Resurrection',
	'The Chew',
	'Falling Skies',
	'Friends',
	'Burn Notice',
	'Farscape',
	'Bates Motel',
	'Today Show',
	'Teen Wolf',
	'True Blood',
	'South Park',
	'Gossip Girl',
	'Orphan Black',
	'Sons of Anarchy',
	'American Horror Story',
	'Continuum',
	'CBS Evening News',
	'Chicago Fire',
	'Fargo',
	'Archer',
	'New Girl',
	'Da Vincis Demons',
	'The X-Files',
	'Parenthood',
	'Lost',
	'One Tree Hill',
	'Veronica Mars',
	'Californication',
	'Black Box',
	'Spider-Man: The Animated Series',
	'Saturday Night Live',
	'House',
	'Psych',
	'Doctor Who',
	'Smallville',
	'The Young and the Restless',
	'CSI: Miami',
	'Devious Maids',
	'The Amazing Race',
	'2 Broke Girls',
	'Sex and the City',
	'House Hunters',
	'Gilmore Girls',
	'Downton Abbey',
	'Macgyver',
	'SpongBob SquarPants'];
	return listOfShows;
}

