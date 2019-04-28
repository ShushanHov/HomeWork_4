/*5.Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting
order is violated.*/
function sortingViolates(array){
	let violateIndex=-1;
	for (let i=0;i<array.length-1; i++){
		if(array[i+1]<array[i]) {
			violateIndex=i+1;
			beak;
		}
	}	
	console.log(violateIndex);
}
sortingViolates([2, 12, 15, 48, 64])
sortingViolates([-9, -4, -4, 3, 12, 4, 5])
