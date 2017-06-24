import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
	validations: {
		'model.points': {
			presence: true,
			numericality: true
		}
	},	
});