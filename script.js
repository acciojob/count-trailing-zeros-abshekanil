function trailingZeros(n) {
  //your JS code here. If required.
	let count = 0;
	while(n > 0)
		{
			let ld = n%10;
			if(ld === 0)
			{
				count++;
			} 

			n = Math.floor(n/10);
		}
	return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
