var r = "rock", p = "paper", s = "scissors";
var wins = 0;
var lose = 0;
var tie = 0;
//var winlose = 0;
//console.log("js run");

function Person(choicePicked){
	//this.name = name;
	this.choicePicked = choicePicked;
	this.compare = function(compareAgainst) {
		if(this.choicePicked === r && compareAgainst === r){return "tie";}
		if(this.choicePicked === r && compareAgainst === p){return "lose";}
		if(this.choicePicked === r && compareAgainst === s){return "win";}
		if(this.choicePicked === s && compareAgainst === r){return "lose";}
		if(this.choicePicked === s && compareAgainst === s){return "tie";}
		if(this.choicePicked === s && compareAgainst === p){return "win";}
		if(this.choicePicked === p && compareAgainst === p){return "tie";}
		if(this.choicePicked === p && compareAgainst === r){return "win";}
		if(this.choicePicked === p && compareAgainst === s){return "lose";}

	};

}

var player = new Person(r);
var computer = new Person(r);

function rockPressed(){
	update(r);
	//console.log("Button func called");
}
function paperPressed(){update(p);}
function scissorsPressed(){update(s);}


document.getElementById("rockButton").addEventListener("click", rockPressed);
document.getElementById("paperButton").addEventListener("click", paperPressed);
document.getElementById("scissorsButton").addEventListener("click", scissorsPressed);
//document.getElementById("rockButton").onclick = rockPressed;
//document.getElementById("paperButton").onclick = paperPressed;
//document.getElementById("scissorsButton").onclick = scissorsPressed;

function update(choice){
	//console.log("Button clicked");
	player.choicePicked = choice;
	writeMsg(("You chose: " + player.choicePicked), "userChoice");
	var temp = Math.floor((Math.random()*3)+1);
	//console.log("random: "+ temp);
	if(temp === 1){
		computer.choicePicked = r;
	}
	else if(temp === 2){
		computer.choicePicked = p;
	}
	else{
		computer.choicePicked = s;
	}

	writeMsg(("The computer chose: " + computer.choicePicked), "computerChoice");

	if(player.compare(computer.choicePicked) === "win"){
		wins++;
		writeMsg("Congrats! You beat the computer!", "results");
	}

	else if(player.compare(computer.choicePicked) === "lose"){
		lose++;
		writeMsg("You lost... better luck next time", "results");
	}
	else{
		tie++;
		writeMsg("Wow, that was a tie. Try again!", "results");
	}


	writeMsg(("wins: " + wins), "win");
	writeMsg(("losses: " + lose), "lose");
	writeMsg(("ties: " + tie), "tie"); 
	if(lose === 0 && win === 0){
		writeMsg(("win/loss ratio: " + wins + "/" + lose), "winLose");
	}
	else if(lose === 0){
		writeMsg(("win/loss ratio: " + wins + "/" + lose), "winLose");
	}
	else{
		writeMsg(("win/loss ratio: " + wins/lose), "winLose");
	}
	


}

function writeMsg(inputMsg, elId){

	var el;
	el = document.getElementById(elId);
	el.innerHTML=inputMsg;
}
