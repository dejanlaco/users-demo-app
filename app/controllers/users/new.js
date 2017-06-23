import Ember from 'ember';

export default Ember.Controller.extend({
	user: {},
	actions: {
		save: function() {
			let user = this.get('user');
			let model = this.store.createRecord('user', {
				fname: user.fname,
				lname: user.lname,
				email: user.email,
				points: user.points
			});
			model.save().then(()=>{
				this.transitionToRoute('users');
				this.set('user',{});
			});
		}
	}
	//info: {},
	//actions: {
	//	newUser: function(model) {
	//		//let inf = this.get('info');
	//		let newuser = this.store.createRecord('user',{
	//			fname: 'test'
	//		});

	//		newuser.save().then(()=>{
	//			this.transitionToRoute('application');
	//		},()=> {
	//			console.log('failed');
	//		});
	//	},
	//	cancel() {
	//		return true;
	//	}
	//}
});