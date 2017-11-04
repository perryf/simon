class Sentence {
	constructor(measureWord, subject, object, verb, adjective) {
		this.measureWord = measureWord
		this.subject = subject
		this.verb = verb
		this.adjective = adjective
		this.object = object
	}

	checkLevelOneSentence() {
		return userSentence.measureWord != null && userSentence.object != null
	}

	checkLevelTwoSentence() {
		return (
			userSentence.subject != null &&
			userSentence.verb != null &&
			userSentence.object != null
		)
	}

	checkLevelThreeSentence() {
		return this.checkLevelTwoSentence() && userSentence.adjective != null
	}
	// Nice way of keeping things concise! ^

	isEqual(userSentence) {
		let correct = false

		if (this.checkLevelOneSentence()) {
			correct =
				userSentence.measureWord.cn === theSentence.measureWord.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		if (this.checkLevelTwoSentence()) {
			correct =
				userSentence.subject.cn === theSentence.subject.cn &&
				userSentence.verb.cn === theSentence.verb.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		if (this.checkLevelThreeSentence()) {
			correct =
				userSentence.subject.cn === theSentence.subject.cn &&
				userSentence.verb.cn === theSentence.verb.cn &&
				userSentence.adjective.cn === theSentence.adjective.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		return correct
	}
}

let theSentence = new Sentence()
let userSentence = new Sentence()
// Declare these in the script.js file to make script.js easier to follow along with

// Great use of classes here.  Methods are well defined.  You could arguably abstract some of the isEqual method into smaller more defined methods, but great job overall here!
