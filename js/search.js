const linearSearch = function ( array, value ){
	for( let i = 0; i < array.length; i++ ){
		if( array[i] == value ){
			return i;
		}
	}
	return false;
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

module.exports = {linearSearch, binarySearch};