const bubbleSort = function( array ){
	return new Promise(async (resolve) => {
		let arrayRead = [];
		let arraySwap = [];
		for( let i = array.length - 1; i >= 0; i-- ){
			for( let j = 0, k = 1; k <= i; j++, k++ ){

				arrayRead.push( [ array[j], array[k] ] );

				if( array[j] > array[k] ){
					arraySwap.push(arrayRead.length-1);

					tmp = array[j];	
					array[j] = array[k];
					array[k] = tmp;
				}
			}
		}

		for( let i = 0; i < arrayRead.length; i++ ){
			let childGroupFirst = document.getElementById("elem" + arrayRead[i][0] );
			let childGroupSecond = document.getElementById("elem" + arrayRead[i][1] );
			
			let firstRectangle = childGroupFirst.getElementsByClassName("rectanlgeNumbers")[0];
			let secondRectangle = childGroupSecond.getElementsByClassName("rectanlgeNumbers")[0];

			let firstText = childGroupFirst.getElementsByClassName("textNumbers")[0];
			let secondText = childGroupSecond.getElementsByClassName("textNumbers")[0];

			firstRectangle.setAttribute("fill", READ_COLOUR);
			secondRectangle.setAttribute("fill", READ_COLOUR);
			await new Promise((resolve) => {
		        setTimeout(() => {
		          resolve();
		        }, ANIMATION_SPEED);
		    });

			if( arraySwap.indexOf( i ) != -1 ){
					firstRectangle.setAttribute("fill", MATCH_COLOUR);
					secondRectangle.setAttribute("fill", MATCH_COLOUR);

					tmpX = firstRectangle.getAttribute("x");
					firstRectangle.setAttribute("x", secondRectangle.getAttribute("x"));
					firstText.setAttribute("x", firstRectangle.getAttribute("x"));

					secondRectangle.setAttribute("x", tmpX);		
					secondText.setAttribute("x", secondRectangle.getAttribute("x"));
			}

			firstRectangle.setAttribute("fill", INITIAL_COLOUR);
			secondRectangle.setAttribute("fill", INITIAL_COLOUR);
		}
		resolve(array);
	});
}

const selectionSort = function( array ){
	return new Promise(async (resolve) => {
		let arrayRead = [];
		let arraySwap = [];

		for( let i = 0; i < array.length; i++ ){
			let min = i;
			for( let k = i+1; k < array.length; k++ ){
				arrayRead.push( [ array[min], array[k] ] );
				if( array[min] > array[k] ){
					min = k;
				}
			}
			arrayRead.push( [ array[min], array[i] ] );

			tmp = array[i];	
			array[i] = array[min];
			array[min] = tmp;

			arraySwap.push(arrayRead.length-1);
		}

		for( let i = 0; i < arrayRead.length; i++ ){
			let childGroupFirst = document.getElementById("elem" + arrayRead[i][0] );
			let childGroupSecond = document.getElementById("elem" + arrayRead[i][1] );
			
			let firstRectangle = childGroupFirst.getElementsByClassName("rectanlgeNumbers")[0];
			let secondRectangle = childGroupSecond.getElementsByClassName("rectanlgeNumbers")[0];

			let firstText = childGroupFirst.getElementsByClassName("textNumbers")[0];
			let secondText = childGroupSecond.getElementsByClassName("textNumbers")[0];

			firstRectangle.setAttribute("fill", READ_COLOUR);
			secondRectangle.setAttribute("fill", READ_COLOUR);
			await new Promise((resolve) => {
		        setTimeout(() => {
		          resolve();
		        }, ANIMATION_SPEED);
		    });

			if( arraySwap.indexOf( i ) != -1 ){
					firstRectangle.setAttribute("fill", MATCH_COLOUR);
					secondRectangle.setAttribute("fill", MATCH_COLOUR);

					tmpX = firstRectangle.getAttribute("x");
					firstRectangle.setAttribute("x", secondRectangle.getAttribute("x"));
					firstText.setAttribute("x", firstRectangle.getAttribute("x"));

					secondRectangle.setAttribute("x", tmpX);		
					secondText.setAttribute("x", secondRectangle.getAttribute("x"));
			}

			firstRectangle.setAttribute("fill", INITIAL_COLOUR);
			secondRectangle.setAttribute("fill", INITIAL_COLOUR);
		}
		resolve( array );
	});
}

const insertionSort = function( array ){
	return new Promise(async (resolve) => {
		let arrayRead = [];
		let arraySwap = [];

		for( let i = 0; i < array.length - 1; i++ ){
			let k = i+1;
			while( array[k-1] > array[k]){
				arrayRead.push( [ array[k-1], array[k] ] );
				arraySwap.push(arrayRead.length-1);
				tmp = array[k-1];	
				array[k-1] = array[k];
				array[k] = tmp;	
				k--;
			}
		}
		
		for( let i = 0; i < arrayRead.length; i++ ){
			let childGroupFirst = document.getElementById("elem" + arrayRead[i][0] );
			let childGroupSecond = document.getElementById("elem" + arrayRead[i][1] );
			
			let firstRectangle = childGroupFirst.getElementsByClassName("rectanlgeNumbers")[0];
			let secondRectangle = childGroupSecond.getElementsByClassName("rectanlgeNumbers")[0];

			let firstText = childGroupFirst.getElementsByClassName("textNumbers")[0];
			let secondText = childGroupSecond.getElementsByClassName("textNumbers")[0];

			firstRectangle.setAttribute("fill", READ_COLOUR);
			secondRectangle.setAttribute("fill", READ_COLOUR);
			await new Promise((resolve) => {
		        setTimeout(() => {
		          resolve();
		        }, ANIMATION_SPEED);
		    });

			if( arraySwap.indexOf( i ) != -1 ){
					firstRectangle.setAttribute("fill", MATCH_COLOUR);
					secondRectangle.setAttribute("fill", MATCH_COLOUR);

					tmpX = firstRectangle.getAttribute("x");
					firstRectangle.setAttribute("x", secondRectangle.getAttribute("x"));
					firstText.setAttribute("x", firstRectangle.getAttribute("x"));

					secondRectangle.setAttribute("x", tmpX);		
					secondText.setAttribute("x", secondRectangle.getAttribute("x"));
			}

			await new Promise((resolve) => {
		        setTimeout(() => {
		          resolve();
		        }, ANIMATION_SPEED);
		    });

			firstRectangle.setAttribute("fill", INITIAL_COLOUR);
			secondRectangle.setAttribute("fill", INITIAL_COLOUR);
		}

		resolve(array);
	});
}

const merge = function(left, right){
	let finalArray = [];
	let leftLen = left.length;
	let rightLen = right.length;
	let leftIndex = 0; let rightIndex = 0;
	while( leftIndex < leftLen && rightIndex < rightLen ){
		if( left[ leftIndex ] < right[ rightIndex ] ){
			finalArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			finalArray.push(right[rightIndex]);
			rightIndex++;
		}
	}
	finalArray = finalArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
	return finalArray;
}

const mergeSort = function( array ){
   let arrLen = array.length;
   if( arrLen < 2 ){
      return array;
   }
   let mid = Math.floor( arrLen / 2 );
   let left = array.slice( 0, mid );
   let right =array.slice( mid );
   return merge(mergeSort(left),mergeSort(right));
}



// module.exports = {bubbleSort, selectionSort, insertionSort, mergeSort};