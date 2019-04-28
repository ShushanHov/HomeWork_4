/*1. Write a function which receives an array and a number as arguments and returns a new array

from the elements of the given array which are larger than the given number.*/
function elementsAreLargerThanGivenNumber(array, number){
	let result=[];
	for (var i = 0; i< array.length; i++) {
		if (array[i]>number) result.push(array[i]);
	}
	(result.length<1)? console.log(`Such values do not exist.`):console.log(result);
}	
elementsAreLargerThanGivenNumber([10, 25, 16, -5, 30, 15, 24] , 16)
elementsAreLargerThanGivenNumber([1, 1, 2, -3, 0, 8, 4, 0], 9)