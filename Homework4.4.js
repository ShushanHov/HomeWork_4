/*4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such
element does not exist, return -1)․*/
function usingRecurtion(array){
	var number=0;
	let minPositiveNumber=+Infinity;
	minPositive(array);
	function minPositive(array) {
		if (number<array.length){
			if (array[number]>-1 && array[number]<minPositiveNumber) minPositiveNumber=array[number];
			number+=1;
			minPositive(array);
    	}
    
	}
	(minPositiveNumber==+Infinity)? console.log('-1'): console.log(minPositiveNumber);
}
usingRecurtion([56, -9, 87, -23, 0, -105, 55, 1])
usingRecurtion([45, -9, 15, 5, -78])
usingRecurtion([-5, -9, -111, -1000, -7])