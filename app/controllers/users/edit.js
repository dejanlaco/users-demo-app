import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function(model) {
			model.save();
			this.transitionToRoute('users');
		}
	}	
});
