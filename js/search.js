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
				resolve(j);
				break;
			} else {
				childNo[j].setAttribute("fill", INITIAL_COLOUR);
			}
		}
		resolve(false);
	});
}

//Only on sorted array
const binarySearch = function ( array, value ){
	return new Promise(async (resolve) => {
		let svg = document.getElementById("playArea");		
		var childNo = svg.getElementsByClassName("rectanlgeNumbers");
		console.log( childNo );
		let found = false;
		let highEnd = childNo.length - 1;
		let lowerEnd = 0;
		while( lowerEnd <= highEnd ){
			var middleEnd = Math.floor((highEnd + lowerEnd)/2);

			childNo[middleEnd].setAttribute("fill", READ_COLOUR);
			var number = parseInt( childNo[middleEnd].getAttribute("data-var") ); 
			console.log( number, middleEnd );
			await new Promise((resolve) => {
		        setTimeout(() => {
		          resolve();
		        }, ANIMATION_SPEED);
		    });

			if( number == value ){
				childNo[middleEnd].setAttribute("fill", MATCH_COLOUR);
				found = true;
				break;
			} else if( number > value ){
				childNo[middleEnd].setAttribute("fill", INITIAL_COLOUR);
				highEnd = middleEnd - 1;
			} else if( number < value ){
				childNo[middleEnd].setAttribute("fill", INITIAL_COLOUR);
				lowerEnd = middleEnd + 1;
			}
			console.log( middleEnd, highEnd, lowerEnd );
		}
		if( found ){
			resolve(middleEnd);
		} else {
			resolve(false);
		}
	});
}

// module.exports = {linearSearch, binarySearch};