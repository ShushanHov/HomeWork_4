/*3. Write a recursive function to determine whether all digits of the number are odd or not.*/
function usingRecurtion(mainNumber){
	var number=0;
	oddNumbers(mainNumber);
	function oddNumbers(mainNumber) {
		if (mainNumber/10>0){
			if (mainNumber%10===1 ||mainNumber%10===3|| mainNumber%10===5 ||mainNumber%10===7 ||mainNumber%10===9){
			mainNumber=Math.floor(mainNumber/10);
			oddNumbers(mainNumber);
			}
			else{
				number=1;
			} 
    	}
    
	}
	(number===1)? console.log('false'): console.log('true');
}
usingRecurtion(4211133)
usingRecurtion(7791)
usingRecurtion(5)