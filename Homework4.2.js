/*2. Write a function, which receives two numbers as arguments and finds all numbers between
them such that each digit of the number is even. The numbers obtained should be printed in a

comma-separated sequence on a single line.*/
function evenNumbers(firstNumber, secondNumber) {
	var result='';
	var currentNumber;
	var row='';
	for (var i=firstNumber; i<=secondNumber; i++){
		currentNumber=i;
		while (currentNumber/10>0){
			if (currentNumber%10===0 ||currentNumber%10===2|| currentNumber%10===4 ||currentNumber%10===6 ||currentNumber%10===8){
				result=currentNumber%10+result;
				currentNumber=Math.floor(currentNumber/10);
			}
			else{
				currentNumber=0
        		result='';
			} 
      
		}
		if (!result=='') {
    	    row=row+i+", ";
            result="";
    	}	
	}
	(row=='')? console.log(`Such numbers does not exist.`):  console.log(row);
}	
evenNumbers(19, 42)
evenNumbers(99,199)