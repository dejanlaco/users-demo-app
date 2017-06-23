import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
	fname: DS.attr('string'),
	lname: DS.attr('string'),
	email: DS.attr('string'),
	points: DS.attr('number', {
		defaultValue() { return 0; }
	}),

	validations: {
		'points': {
			presence: true
		}
	}
});
