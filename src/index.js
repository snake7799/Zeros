function zeros(expression) {
	let expArr = expression.split('*');
	let result = '';
	let zerosCount = 0;
	
	for (let i = 0; i <= expArr.length - 1; i++) {
		let currentNumber = parseInt(expArr[i]);
		let factMultiply = '';
		
		if (expArr[i][expArr[i].length-1] === '!' && expArr[i][expArr[i].length-2] === '!')
			factMultiply = factorial(currentNumber, 'double');
		else
			factMultiply = factorial(currentNumber);

		result = (result == '') ? multiply('1', factMultiply) : multiply(result, factMultiply);
	}
	
	for (let i = result.length-1; i>= 0; i--)
		if (result[i] == 0) 
			zerosCount++;
		else 
			return zerosCount;
	
	function factorial(number, option) {
		if (number < 2) return '1';
		
		let i;
		let step;
		let res = '';
		
		if (option == 'double') {
			i = (number % 2) ? 3 : 2; 
			step = 2;	
		}
		else {
			i = 2; 
			step = 1;
		}
		
		for (i; i <= number; i += step)
			if (res == '')
				res = multiply('1', String(i));
			else	
				res = multiply(res, String(i));
		return res; 
	}
	
	function multiply(a, b) {
		let res = [];

		a = a.split('').reverse();
		b = b.split('').reverse();

		for (let i = 0; i < a.length; i++) {
			for (let j = 0; j < b.length; j++) {
				let multiply = a[i] * b[j];
				res[i + j] = (res[i + j] != undefined) ? res[i + j] + multiply : multiply;
			}
		}

		for (let i = 0; i < res.length; i++) {
			let number = res[i] % 10;
			let carry = Math.floor(res[i] / 10);
			res[i] = number;

			if (res[i + 1] != undefined)
				res[i + 1] += carry;
			else if (carry != 0)
				res[i + 1] = carry;
		}
		return res.reverse().join('').replace(/^(0(?!$))+/, "");
	}
}

