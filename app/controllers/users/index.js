import Ember from 'ember';

export default Ember.Controller.extend({
	points: Ember.computed.mapBy('model', 'points'),
	pointsSum: Ember.computed.sum('points'),
	totalItems: Ember.computed.alias('model.length'),
	averagePoints: Ember.computed('pointsSum', 'totalItems', function() {
		return Number(this.get('pointsSum') / this.get('totalItems')).toFixed(2);
	})
});
