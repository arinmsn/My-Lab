/*


Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.


*/

function fiboEvenSum(n){
	let sum_of_even_terms = 0

	// initialize the first two eleemnts of the Fibonacci sequence
	let a = 1, b = 2;

	while (b <= n){
		if (b % 2 == 0){
			sum_of_even_terms += b;
		}
		// Generate the next term in the Fibonacci sequence
		let nextTerm = a + b;
		a = b;
		b = nextTerm;
	}
	return sum_of_even_terms;
}

module.exports = fiboEvenSum;