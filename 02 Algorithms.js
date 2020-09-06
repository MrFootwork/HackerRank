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
