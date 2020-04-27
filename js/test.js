const search = require('./search.js');
const sort = require('./sort.js');

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass\n')
      return true
    } else {
      console.log('fail\n')
      return false
    }
  },
  arrayToBe: (assertArr) => {
    let eVal = true;
    if( exp.length == assertArr.length ){
      for( var i = 0; i < exp.length; i++ ){
        if( exp[i] != assertArr[i] ){
          eval = false;
          break;
        }
      }
    } else {
      eval = false;
    }
    if( eval ){
      console.log('pass\n');
    } else {
      console.log('fail\n');
    }
    return eVal;
  }
})

const expect = (exp) => matchers(exp);


// describe('search', () => {
//   it('search positive number in array - Binary', () => {
//     let array = [ 1, 2, 3, 4, 5, 6, 7, 10, 12, 16, 19, 28, 34, 49, 90 ];
//     const result = search.binarySearch(array, 12)
//     expect(result).toBe(8);
//   });
//   it('search positive number in array - Linear', () => {
//     let array = [34,2,12,3,4,6,16,10,1,28,49,5,7,90,19];
//     const result = search.linearSearch(array, 12)
//     expect(result).toBe(2);
//   });
//   it('search negative number in array - Binary', () => {
//     let array = [ -28, -16, -12, -7, 1, 2, 3, 4, 5, 10, 19, 34, 49, 60, 90 ];
//     const result = search.binarySearch(array, -16)
//     expect(result).toBe(1);
//   });
//   it('search negative number in array - Linear', () => {
//     let array = [34,2,-12,3,4,60,-16,10,1,-28,49,5,-7,90,19];
//     const result = search.linearSearch(array, -16)
//     expect(result).toBe(6);
//   });
//   it('search number not available in array - Binary', () => {
//     let array = [ -28, -16, -12, -7, 1, 2, 3, 4, 5, 10, 19, 34, 49, 60, 90 ];
//     const result = search.binarySearch(array, -165)
//     expect(result).toBe(false);
//   });
//   it('search number not available in array - Linear', () => {
//     let array = [34,2,-12,3,4,60,-16,10,1,-28,49,5,-7,90,19];
//     const result = search.linearSearch(array, 165)
//     expect(result).toBe(false);
//   });
// })

describe('sort', () => {
  it('sort positive number array - Bubble', () => {
    let passedArr = [34,2,12,3,4,6,16,10,1,28,49,5,7,90,19];
    let returnedArr = [ 1, 2, 3, 4, 5, 6, 7, 10, 12, 16, 19, 28, 34, 49, 90 ];
    const result = sort.bubbleSort(passedArr)
    expect(result).arrayToBe( returnedArr );
  });
  it('sort positive number array - Selection', () => {
    let passedArr = [34,2,12,3,4,6,16,10,1,28,49,5,7,90,19];
    let returnedArr = [ 1, 2, 3, 4, 5, 6, 7, 10, 12, 16, 19, 28, 34, 49, 90 ];
    const result = sort.selectionSort(passedArr)
    expect(result).arrayToBe( returnedArr );
  });
  it('sort positive number array - Insertion', () => {
    let passedArr = [34,2,12,3,4,6,16,10,1,28,49,5,7,90,19];
    let returnedArr = [ 1, 2, 3, 4, 5, 6, 7, 10, 12, 16, 19, 28, 34, 49, 90 ];
    const result = sort.insertionSort(passedArr)
    expect(result).arrayToBe( returnedArr );
  });
  it('sort positive number array - Merge', () => {
    let passedArr = [34,2,12,3,4,6,16,10,1,28,49,5,7,90,19];
    let returnedArr = [ 1, 2, 3, 4, 5, 6, 7, 10, 12, 16, 19, 28, 34, 49, 90 ];
    const result = sort.mergeSort(passedArr)
    expect(result).arrayToBe( returnedArr );
  });
})

