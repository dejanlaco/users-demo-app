import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		displayUsers: function() {
			this.transitionTo('users');
		}
	}	
});
