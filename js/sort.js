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

module.exports = {bubbleSort, selectionSort, insertionSort};