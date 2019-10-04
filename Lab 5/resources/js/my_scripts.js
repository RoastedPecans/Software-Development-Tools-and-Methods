/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle - 
					0 - hide the html tag
					1 - make the html tag visible
			
			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.  
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.  
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
				
/*
	Home Page: 
		changeColor(color) method
			parameter: 
				color- A css color
				
			purpose: This method will set the html body's background color to the 
					 provided parameter.
*/


/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none
			
			purpose: This method will iterate through the stats table and 
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.
						
						2. Update the winner column to the name of the winning team.
						
						3. Keep track of the number of wins/losses for the Buffs.
						
						4. Update the second table to show the total number of wins/losses for the Buffs.
*/

/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
	{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
	{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
	{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

function loadPlayersPage() {
	for (let i = 0; i < players.length; i++) {
		let anchor = document.createElement("a");
		anchor.setAttribute('href', '#');
		anchor.setAttribute('onclick', 'switchPlayers(' + String(i) + ')');
		anchor.innerHTML = players[i].name + '<br />';
		let dropdown = document.getElementById('player_selector');
		dropdown.appendChild(anchor);
	}
}

function switchPlayers(playerNum) {
	let player = players[playerNum];
	document.getElementById('p_year').innerHTML = player.year;
	document.getElementById('p_major').innerHTML = player.major;
	document.getElementById('g_played').innerHTML = player.games_played;
	document.getElementById('player_img').src = player.img;
	document.getElementById('player_img').alt = player.alt;
	document.getElementById('p_yards').innerHTML = player.pass_yards;
	document.getElementById('r_yards').innerHTML = player.rushing_yards;
	document.getElementById('rec_yards').innerHTML = player.receiving_yards;

	let averagePassing = Math.round(player.pass_yards / player.games_played);
	let averageReceiving = Math.round(player.receiving_yards / player.games_played);
	let averageRushing = Math.round(player.rushing_yards / player.games_played);

	document.getElementById('avg_p_yards').innerHTML = averagePassing;
	document.getElementById('avg_r_yards').innerHTML = averageRushing;
	document.getElementById('avg_rec_yards').innerHTML = averageReceiving;
}
