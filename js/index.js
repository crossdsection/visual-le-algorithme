const svgns = "http://www.w3.org/2000/svg";
var finalArray = [];

const INITIAL_COLOUR = "#00FFFF";
const READ_COLOUR = "#D17460"; 
const MATCH_COLOUR = "#6ED160"; 

let ANIMATION_SPEED = 500;

const getRandomNumbers = function( arr, range ){	
	let newVariable = -1;
	do {
		newVariable = Math.floor(Math.random() * range);
	} while( arr.indexOf( newVariable ) != -1 )
	return newVariable;
}

const generateRandomNumbers = function(){
	let arrLen = (document.getElementById("lengthOfArray").value != "" ) ? document.getElementById("lengthOfArray").value : 10;
	let range = (document.getElementById("rangeOfNumber").value != "" ) ? document.getElementById("rangeOfNumber").value : 100;

	finalArray = [];
	document.getElementById("playArea").innerHTML = "";

	let svg = document.getElementById('playArea'); 
	let bBox = svg.getBoundingClientRect();
	let totalWidth = bBox.width;
	let barWidth = (totalWidth / arrLen)/2;

	let availableHeight = window.screen.height - document.getElementById("mainDiv").offsetHeight - 200;

	let max = 0;
	for( var i = 0; i < arrLen; i++ ){
		let newVariable = getRandomNumbers( finalArray, range );
		if( max < newVariable ){
			max = newVariable;
		}

		finalArray.push( newVariable );
	}
	
	console.log( finalArray );
	var svgHeight = ((max + 10)/range) * availableHeight + 20;
	svg.setAttribute("height", svgHeight + "px");

	let posX = 0;
	for( var i = 0; i < arrLen; i++ ){
		let newVariable = finalArray[i];
		let barHeight = (newVariable/range) * availableHeight;
		let barY = svgHeight - barHeight;

		let group = document.createElementNS(svgns, "g");
		group.setAttribute("id", "elem" + newVariable );

		let rectangle = document.createElementNS(svgns, "rect");
		rectangle.classList.add("rectanlgeNumbers");
		rectangle.setAttribute("data-var", newVariable);
		rectangle.setAttribute("x", posX);
		rectangle.setAttribute("y", barY);
		rectangle.setAttribute("width", barWidth);
		rectangle.setAttribute("height", barHeight);
		rectangle.setAttribute("fill", INITIAL_COLOUR);
		
		let fontSize = barWidth / newVariable.toString().length;

		let text = document.createElementNS(svgns, "text");
		text.classList.add("textNumbers");
		text.setAttribute("style", 'font-size:' + fontSize + 'pt;');
		text.setAttribute("x", posX);
		text.setAttribute("y", barY);
		text.textContent = newVariable;

		group.append( rectangle );
		group.append( text );
		svg.append( group );
		posX = posX + 2*barWidth;
	}
}

const linearSearchProcess = function(){
	document.getElementById("hiddenDiv").innerHTML = "";

	document.getElementById("hiddenDiv").style.display = "none";

	var inputForSearch = document.createElement("input");
	inputForSearch.setAttribute("type", "number");
	inputForSearch.setAttribute("id", "searchNumber");
	inputForSearch.setAttribute("placeholder", "Enter Number");
	inputForSearch.style.display = "inline";

	inputForSearch.addEventListener('keypress',function(e) {
	    if(e.which == 13) {
	        value = linearSearch( finalArray, inputForSearch.val() );
	    }
	});

	var buttonForSearch = document.createElement("button");
	buttonForSearch.innerHTML = "Submit";
	buttonForSearch.classList.add("button-class");
	buttonForSearch.addEventListener('click',function(e) {
	    value = linearSearch( finalArray, inputForSearch.value );
	});

	document.getElementById("hiddenDiv").appendChild( inputForSearch );
	document.getElementById("hiddenDiv").appendChild( buttonForSearch );

	document.getElementById("hiddenDiv").style.display = "block";
}

const bubbleSortProcess = function(){
	let playArea = document.getElementById("playArea");
	bubbleSort( finalArray );
}

const selectionSortProcess = function(){
	let playArea = document.getElementById("playArea");
	selectionSort( finalArray );
}

const insertionSortProcess = function(){
	let playArea = document.getElementById("playArea");
	insertionSort( finalArray );
}

const init = function(){
	generateRandomNumbers();
	document.getElementById("hiddenDiv").style.display = "none";
};