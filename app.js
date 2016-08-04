	
var promptInput = prompt("Enter the number");
var intInput = parseInt(promptInput,10);
if(isNaN(promptInput)){
	var text = "invalid input";
} else if(promptInput % 1 != 0){
 	var text = "Decimal values are not valid"
}
document.getElementById("p1").innerHTML = text;

function printFizzBuzz(){
	var fizzVal='fizz';
	var buzzVal='buzz';
	var result = [];
	for(var i=1; i<=intInput;i++){
		
		var printVal= "";
		if(i%3==0){
			printVal+=fizzVal;
		}

		if(i%5==0){
			printVal+=buzzVal
		}
		if(printVal){
			result.push(printVal);
		}else{
			result.push(i);
		}
	}
	$('p').html(result.toString().replace(/,/g,'<br>'));
	}



	

