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
