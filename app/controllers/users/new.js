import Ember from 'ember';

export default Ember.Controller.extend({
	model: {},
	actions: {
		save: function() {
			let user = this.get('model');
			let model = this.store.createRecord('user', {
				fname: user.fname,
				lname: user.lname,
				email: user.email,
				points: user.points
			});
			model.save().then(()=>{
				this.transitionToRoute('users');
				this.set('model',{});
			});
		}
	}
});