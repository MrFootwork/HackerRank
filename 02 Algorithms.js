function gradingStudents(grades) {
	const next5 = grade => {
		let nextMultiple = grade
		while (nextMultiple % 5) nextMultiple++
		return nextMultiple
	}

	return grades.map(grade => {
		if (grade < 38) return grade
		if (grade % 5 >= 3) return next5(grade)
		return grade
	})
}
// console.log(gradingStudents([ 73, 67, 40, 33 ]))
// console.log(gradingStudents([ 73, 67, 38, 33 ]))

/**Apple and Orange
 * @param {number} s starting point of Sam's house location
 * @param {number} t ending location of Sam's house location
 * @param {number} a location of the Apple tree
 * @param {number} b location of the Orange tree
 * @param {number[]} apples distances at which each apple falls from the tree
 * @param {number[]} oranges distances at which each orange falls from the tree
 * @return {void} prints amount of apples and oranges landing on Sam's house
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let landingOnHouse = [ 0, 0 ]
	landingOnHouse[0] = apples.filter(aDist => a + aDist >= s && a + aDist <= t).length
	landingOnHouse[1] = oranges.filter(oDist => b + oDist >= s && b + oDist <= t).length
	console.log(landingOnHouse[0])
	console.log(landingOnHouse[1])
}
// console.log(countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ]))

/**Kangaroo 
 * @param {number} x1 starting position of kangaroo 1
 * @param {number} v1 jump distance of kangaroo 1
 * @param {number} x2 starting position of kangaroo 2
 * @param {number} v2 jump distance of kangaroo 2
 * @return {void} prints: YES if they can land on the same location at the same time; otherwise NO
*/
function kangaroo(x1, v1, x2, v2) {
	//mathematical
	if ((x2 - x1) * (v2 - v1) < 0 && (x2 - x1) % (v2 - v1) === 0) return 'YES'
	return 'NO'
}
// console.log('YES: ', kangaroo(0, 3, 4, 2))
// console.log('YES: ', kangaroo(42, 3, 94, 2))
// console.log('NO: ', kangaroo(0, 2, 5, 3))

/**Between Two Sets 
 * @param {Number[]} a 
 * @param {Number[]} b
 * @return {Number} Amount of Integers between both sets
*/
function getTotalX(a, b) {
	let counter = 0
	for (let i = a[a.length - 1]; i <= b[0]; i++) {
		if (a.every(a => !(i % a)) && b.every(b => !(b % i))) counter++
	}
	return counter
}
// console.log(getTotalX([ 2, 6 ], [ 24, 36 ]))
// console.log(getTotalX([ 2, 4 ], [ 16, 32, 96 ]))

/**Breaking the Records 
 * @param {Number[]} scores seasonal scores
 * @return {Number[]} [ high, low ]
 * 
 * high: amount of highscore breaks along the season
 * 
 * low: amount of lowscore breaks along the season
*/
function breakingRecords(scores) {
	return scores
		.reduce(
			(records, score) => {
				if (score > records[0][records[0].length - 1]) records[0].push(score)
				if (score < records[1][records[1].length - 1]) records[1].push(score)
				return records
			},
			[ [ scores[0] ], [ scores[0] ] ]
		)
		.map(record => record.length - 1)

	let high = 0
	let low = 0
	let record = { high: scores[0], low: scores[0] }
	for (let i in scores) {
		if (scores[i] > record.high) {
			record.high = scores[i]
			high++
		}
		if (scores[i] < record.low) {
			record.low = scores[i]
			low++
		}
	}
	return [ high, low ]
}
// console.log(breakingRecords([ 10, 5, 20, 20, 4, 5, 2, 25, 1 ]))
// console.log(breakingRecords([ 3, 4, 21, 36, 10, 28, 35, 5, 24, 42 ]))

/**Birthday Chocolate 
 * @param {number[]} s numbers on each square of the chocolate bar
 * @param {Number} d Ron's birthday
 * @param {Number} m Ron's birth month
 * @return {Number} total number of ways that Lily can portion the chocolate bar
*/
function birthday(s, d, m) {
	let count = 0
	for (let i = 0; i <= s.length - m; i++) {
		if (s.slice(i, i + m).reduce((sum, el) => sum + el, 0) === d) count++
	}
	return count

	//O(n) time, O(1) space
	let counter = 0
	let sum = 0
	for (let i = 0; i < m; i++) sum += s[i]
	if (sum === d) counter++
	for (let i = m, j = 0; i < s.length; i++, j++) {
		sum -= s[j]
		sum += s[i]
		if (sum === d) counter++
	}
	return counter
}
// console.log(birthday([ 1, 2, 1, 3, 2 ], 3, 2))
// console.log(birthday([ 1, 1, 1, 1, 1, 1 ], 3, 2))

/**Divisible Sum Pairs
 * @param {Number} n array length of ar
 * @param {Number[]} ar an array of numbers
 * @param {Number} k number to divide the pair sum by
 * @return {Number} number of pairs
 */
function divisibleSumPairs(n, k, ar) {
	let pairs = []
	for (let j = 1; j < n; j++) {
		for (let i = 0; i < j; i++) {
			if ((ar[i] + ar[j]) % k === 0) pairs.push([ i, j ])
		}
	}
	return pairs.length
}
// console.log(divisibleSumPairs(6, 3, [ 1, 3, 2, 6, 1, 2 ]))
