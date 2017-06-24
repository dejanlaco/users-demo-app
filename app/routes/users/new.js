import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return {
			fname: '',
			lname: '',
			email: '',
			points: ''
		}
	}	
});
