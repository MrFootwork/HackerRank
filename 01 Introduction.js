// Complete the compareTriplets function below.
function compareTriplets(a, b) {
	let result = [ 0, 0 ]

	for (let i = 0; i < 3; i++) {
		if (a[i] > b[i]) result[0]++
		if (a[i] < b[i]) result[1]++
	}
	return result
}
// console.log(compareTriplets([ 17, 28, 30 ], [ 99, 16, 8 ]))

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
	return ar.reduce((sum, num) => sum + num, 0)
}
// console.log(aVeryBigSum([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]))

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
	let result = 0

	for (let i = 0; i < arr.length; i++) {
		result += arr[i][i] - arr[arr.length - 1 - i][i]
	}
	return Math.abs(result)
}
console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))
console.log(diagonalDifference([ [ 11, 2, 4, 1 ], [ 4, 5, 6, 0 ], [ 10, 8, -12, 0 ], [ 1, 2, 3, 4 ] ]))
