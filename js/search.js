const linearSearch = function ( array, value ){
	return new Promise(async (resolve) => {
		let svg = document.getElementById("playArea");		
		var childNo = svg.getElementsByClassName("rectanlgeNumbers");
		for( var j = 0; j < childNo.length; j++ ){
			var number = parseInt( childNo[j].getAttribute("data-var") ); 
			childNo[j].setAttribute("fill", READ_COLOUR);
			await new Promise((resolve) => {
		        setTimeout(() => {
		          resolve();
		        }, ANIMATION_SPEED);
		    });
		    
			if( number == value ){
				childNo[j].setAttribute("fill", MATCH_COLOUR);
				resolve(i);
			} else {
				childNo[j].setAttribute("fill", INITIAL_COLOUR);
			}
		}
		resolve(false);
	});
}

//Only on sorted array
const binarySearch = function ( array, value ){
	let highEnd = array.length - 1;
	let lowerEnd = 0;
	while( lowerEnd <= highEnd ){
		var middleEnd = Math.floor((highEnd + lowerEnd)/2);
		if( array[ middleEnd ] == value ){
			return middleEnd;
		} else if( array[ middleEnd ] > value ){
			highEnd = middleEnd - 1;
		} else if( array[ middleEnd ] < value ){
			lowerEnd = middleEnd + 1;
		}
	}
	return false;
}

// module.exports = {linearSearch, binarySearch};