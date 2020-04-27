const bubbleSort = function( array ){
	for( let i = array.length - 1; i >= 0; i-- ){
		for( let j = 0, k = 1; k <= i; j++, k++ ){
			if( array[j] > array[k] ){
				tmp = array[j];	
				array[j] = array[k];
				array[k] = tmp;
			}
		}
	}
	return array;
}

const selectionSort = function( array ){
	for( let i = 0; i < array.length; i++ ){
		let min = i;
		for( let k = i+1; k < array.length; k++ ){
			if( array[min] > array[k] ){
				min = k;
			}
		}
		tmp = array[i];	
		array[i] = array[min];
		array[min] = tmp;
	}
	return array;
}

const insertionSort = function( array ){
	for( let i = 0; i < array.length - 1; i++ ){
		let k = i+1;
		while( array[k-1] > array[k]){
			tmp = array[k-1];	
			array[k-1] = array[k];
			array[k] = tmp;	
			k--;
		}
	}
	return array;
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
	// for( var i = 0; i < leftLen; i++ ){
	// 	let pushed = false;
	// 	for( var j = 0; j < finalArray.length; j++ ){
	// 		if( left[i] < finalArray[j] ){
	// 			finalArray.splice(j, 0, left[i]);
	// 			pushed = true;
	// 			break;
	// 		}  
	// 	}
	
	// 	if( !pushed )
	// 		finalArray.push(left[i]);
	// }
	// for( var i = 0; i < rightLen; i++ ){
	// 	let pushed = false;
	// 	for( var j = 0; j < finalArray.length; j++ ){
	// 		if( right[i] < finalArray[j] ){
	// 			finalArray.splice(j, 0, right[i]);
	// 			pushed = true;
	// 			break;
	// 		}  
	// 	}
	
	// 	if( !pushed )
	// 		finalArray.push(right[i]);
	// }
	console.log( finalArray );

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



module.exports = {bubbleSort, selectionSort, insertionSort, mergeSort};