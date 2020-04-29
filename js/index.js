const svgns = "http://www.w3.org/2000/svg";
var finalArray = [];

const INITIAL_COLOUR = "#00FFFF";
const READ_COLOUR = "#D17460"; 
const MATCH_COLOUR = "#6ED160"; 

let ANIMATION_SPEED = 200;

const getRandomNumbers = function( arr, range ){	
	let newVariable = -1;
	do {
		newVariable = Math.floor(Math.random() * range);
	} while( arr.indexOf( newVariable ) != -1 )
	return newVariable;
}

const generateRandomNumbers = function( sortedArray ){
	document.getElementById("hiddenDiv").style.display = "none";

	let arrLen = (document.getElementById("lengthOfArray").value != "" ) ? document.getElementById("lengthOfArray").value : 10;
	let range = (document.getElementById("rangeOfNumber").value != "" ) ? document.getElementById("rangeOfNumber").value : 100;

	let max = 0;
	if ( sortedArray == null ){
		finalArray = [];
		for( var i = 0; i < arrLen; i++ ){
			let newVariable = getRandomNumbers( finalArray, range );
			if( max < newVariable ){
				max = newVariable;
			}
			finalArray.push( newVariable );
		}
	} else {
		finalArray = sortedArray;
		max = finalArray[ finalArray.length - 1 ];
	}

	document.getElementById("playArea").innerHTML = "";

	let svg = document.getElementById('playArea'); 
	let bBox = svg.getBoundingClientRect();
	let totalWidth = bBox.width;
	let barWidth = (totalWidth / arrLen)/2;

	let availableHeight = window.screen.height - document.getElementById("mainDiv").offsetHeight - 100;
	var svgHeight = ( max > availableHeight ) ? ((max)/range) * availableHeight + 100 : availableHeight;

	svg.setAttribute("height", svgHeight + "px");

	let posX = 0;
	for( var i = 0; i < arrLen; i++ ){
		let newVariable = finalArray[i];
		let barHeight = (newVariable/range) * svgHeight - 20;
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

const createManualArray = function(){
	let arrLen = (document.getElementById("lengthOfArray").value != "" ) ? document.getElementById("lengthOfArray").value : 10;
	document.getElementById("hiddenDiv").innerHTML = "";
	document.getElementById("hiddenDiv").style.display = "none";

	var manualDiv = document.createElement("div");

	//temp
	var validateDuplicacy = function( value ){
		var obj = {};
		for( var i = 0; i < arrLen; i++ ){
			if( !isNaN( document.getElementById("manualEntry" + i).value ) && document.getElementById("manualEntry" + i).value != "" ){
				var number = document.getElementById("manualEntry" + i).value;
				if( obj[ number ] == null ){
					obj[ number ] = 0;
				}
				obj[ number ]++;
				if( obj[ number ] > 1 ){
					document.getElementById("errorText").innerHTML = "We do not support Duplicate Numbers currently";
					document.getElementById("errorDiv").classList.remove("hideClass");
					document.getElementById("errorDiv").classList.add("showClass");
					setTimeout(function(){
						document.getElementById("errorDiv").classList.remove("showClass");
						document.getElementById("errorDiv").classList.add("hideClass");
					},1000)
					return false;
				}
			}
		}
		return true;
	}

	for( var i = 0; i < arrLen; i++ ){
		var manualInput = document.createElement("input");
		manualInput.setAttribute("type", "number");
		manualInput.setAttribute("id", "manualEntry" + i );
		manualInput.setAttribute("placeholder", "Enter Number");
		manualInput.setAttribute("min", 0);
		manualInput.style.width = "100px";
		manualInput.style.display = "inline";
		manualInput.addEventListener('blur',function(e) {
			if( !validateDuplicacy() ){
				this.value = "";
				this.focus();
			}
		});
		manualDiv.appendChild( manualInput );
	}

	var buttonManual = document.createElement("button");
	buttonManual.innerHTML = "Submit";
	buttonManual.classList.add("button-class");
	buttonManual.addEventListener('click',function(e) {
		array = [];
		for( var i = 0; i < arrLen; i++ ){
			if( !isNaN( document.getElementById("manualEntry" + i).value ) && document.getElementById("manualEntry" + i).value != "" ){
				array.push( parseInt( document.getElementById("manualEntry" + i).value ) );
			} else {
				document.getElementById("errorText").innerHTML = "Please enter valid numbers";
				document.getElementById("errorDiv").classList.remove("hideClass");
				document.getElementById("errorDiv").classList.add("showClass");
				setTimeout(function(){
					document.getElementById("errorDiv").classList.remove("showClass");
					document.getElementById("errorDiv").classList.add("hideClass");
				},1000)
				document.getElementById("manualEntry" + i).focus();
				return false;
			}	
		} 
		generateRandomNumbers( array );
	});
	manualDiv.appendChild( buttonManual );

	document.getElementById("hiddenDiv").appendChild( manualDiv);

	document.getElementById("hiddenDiv").style.display = "block";
}

const searchDiv = function(searchType){
	document.getElementById("hiddenDiv").innerHTML = "";
	document.getElementById("hiddenDiv").style.display = "none";
	if( searchType == 'binary' ){
		finalArray = mergeSort( finalArray );
		generateRandomNumbers( finalArray );
	}

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
		if( searchType == "linear" ){
			value = linearSearch( finalArray, inputForSearch.value );
			document.getElementById("hiddenDiv").style.display = "none";
		}
		if( searchType == "binary" ){
			value = binarySearch( finalArray, inputForSearch.value );
			document.getElementById("hiddenDiv").style.display = "none";
		}
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