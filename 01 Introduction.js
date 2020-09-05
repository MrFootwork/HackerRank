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
// console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))
// console.log(diagonalDifference([ [ 11, 2, 4, 1 ], [ 4, 5, 6, 0 ], [ 10, 8, -12, 0 ], [ 1, 2, 3, 4 ] ]))

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
	return ar.reduce((sum, item) => sum + item, 0)
}

// Complete the plusMinus function below.
function plusMinus(arr) {
	// console.log((arr.filter(number => number > 0).length / arr.length).toFixed(6))
	// console.log((arr.filter(number => number < 0).length / arr.length).toFixed(6))
	// console.log((arr.filter(number => number == 0).length / arr.length).toFixed(6))
}
// console.log(plusMinus([ 1, 2, 3, 4, -4, 0 ]))

// Complete the staircase function below.
function staircase(n) {
	for (let i = 1; i <= n; i++) {
		console.log('#'.repeat(i).padStart(n, ' '))
	}
}
// staircase(4)

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
	let min = Math.min(...arr)
	let max = Math.max(...arr)
	let sum = arr.reduce((sum, number) => sum + number, 0)
	console.log('simple: ', sum - max, sum - min)

	let sums = []
	for (let i = 0; i < 5; i++) {
		sums[i] = arr.reduce((sum, number, index) => {
			if (index !== i) return sum + number
			return sum
		}, 0)
	}
	console.log('for-loop: ', Math.min(...sums), Math.max(...sums))
}
// miniMaxSum([ 1, 2, 3, 4, 5 ])
// miniMaxSum([ 7, 69, 2, 221, 8974 ])

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
	let tallest = 0
	let counter = 0
	for (let i = 0; i < candles.length; i++) {
		if (candles[i] > tallest) {
			tallest = candles[i]
			counter = 0
		}
		if (candles[i] === tallest) counter++
	}
	return counter
}
// console.log(birthdayCakeCandles([ 1, 2, 3, 2, 3 ]))
// console.log(birthdayCakeCandles([ 4, 4, 1, 3 ]))

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
	let hh = s.slice(0, 2)
	let mm = s.slice(3, 5)
	let ss = s.slice(6, 8)

	if (s.slice(8, 10) === 'PM') {
		if (hh === '12') return `${hh}:${mm}:${ss}`
		return `${+hh + 12}:${mm}:${ss}`
	}
	if (s.slice(8, 10) === 'AM') {
		if (hh === '12') return `00:${mm}:${ss}`
		return `${hh}:${mm}:${ss}`
	}
}
// console.log(timeConversion('12:01:00PM'))
// console.log(timeConversion('01:01:00PM'))
// console.log(timeConversion('12:01:00AM'))
// console.log(timeConversion('01:01:00AM'))
