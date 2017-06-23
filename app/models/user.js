import DS from 'ember-data';

export default DS.Model.extend({
	fname: DS.attr('string'),
	lname: DS.attr('string'),
	email: DS.attr('string'),
	points: DS.attr('number', {
		defaultValue() { return 0; }
	})
});
