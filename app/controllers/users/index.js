import Ember from 'ember';

export default Ember.Controller.extend({
	points: Ember.computed.mapBy('model', 'points'),
	pointsSum: Ember.computed.sum('points'),
	totalItems: Ember.computed.alias('model.length'),
	averagePoints: Ember.computed('pointsSum', 'totalItems', function() {
		return Number(this.get('pointsSum') / this.get('totalItems')).toFixed(2);
	}),

	columns: [
		{
			"propertyName": "fname",
			"title": "First Name"
		},
		{
			"propertyName": "lname",
			"title": "Last Name"
		},
		{
			"propertyName": "email",
			"title": "Email"
		},
		{
			"propertyName": "points",
			"title": "Points"
		},
		{
			"template":"components/table-action",
			"className": "text-right"
		}
	],
	customclass: {
		"table": "table table-striped"
	}
});
