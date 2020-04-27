const svgns = "http://www.w3.org/2000/svg";

const generateRandomNumbers = function(){
	let arrLen = ($("#lengthOfArray").val() != "" ) ? $("#lengthOfArray").val() : 10;
	let range = ($("#rangeOfNumber").val() != "" ) ? $("#rangeOfNumber").val() : 100;

	let finalArray = [];
	$("#playArea").empty();

	let svg = document.getElementById('playArea'); 
	let bBox = svg.getBoundingClientRect();
	let totalWidth = bBox.width;
	let barWidth = (totalWidth / arrLen)/2;

	let availableHeight = window.screen.height - $("#mainDiv").height() - 200;

	let max = 0;
	for( var i = 0; i < arrLen; i++ ){
		let newVariable = Math.floor(Math.random() * range);
		if( max < newVariable ){
			max = newVariable;
		}

		finalArray.push( newVariable );
	}
	
	var svgHeight = ((max + 10)/range) * availableHeight + 20;
	svg.setAttribute("height", svgHeight + "px");

	let posX = 0;
	for( var i = 0; i < arrLen; i++ ){
		let newVariable = finalArray[i];
		let barHeight = (newVariable/range) * availableHeight;
		let barY = svgHeight - barHeight;

		let group = document.createElementNS(svgns, "g");

		let rectangle = document.createElementNS(svgns, "rect");
		rectangle.setAttribute("x", posX);
		rectangle.setAttribute("y", barY);
		rectangle.setAttribute("width", barWidth);
		rectangle.setAttribute("height", barHeight);
		rectangle.setAttribute("fill", "#00FFFF");
		
		let fontSize = barWidth / newVariable.toString().length;
		console.log( fontSize );

		let text = document.createElementNS(svgns, "text");
		text.setAttribute("style", 'font-size:' + fontSize + 'pt;');
		// text.setAttribute("text-anchor", 'middle');
		// text.setAttribute("alignment-baseline", 'central');
		text.setAttribute("x", posX);
		text.setAttribute("y", barY);
		text.textContent = newVariable;

		group.append( rectangle );
		group.append( text );
		svg.append( group );
		posX = posX + 2*barWidth;
	}
}

$(document).ready(function(){
	generateRandomNumbers();
});