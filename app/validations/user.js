import { validatePresence, validateNumber } from 'ember-changeset-validations/validators';

export default {
	points: [
		validatePresence({ 
			presence: true, 
			message: "{description} can\'t be empty" 
		}),
		validateNumber({gte: 0, lte: 9999})	
	]
}