function trailingZeros(n) {
  //your JS code here. If required.
	let factorial = 1;

	for(let i=1; i<=n; i++)
		{
			factorial*=i;
		}

	let count = 0;

	while(factorial > 0){
		
		if(factorial%10 === 0)
		{
			count++;
		}
		else{
			break;
		}

		factorial = Math.floor(factorial/10);
		
	}
	
 return count;
	
	 
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
