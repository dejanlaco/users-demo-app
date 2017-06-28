import Ember from 'ember';
import PostValidations from 'users-demo-app/mixins/validations/user';

export default Ember.Controller.extend(PostValidations, {
	showErrors: false,
	actions: {
		save: function() {
			this.validate().then(()=>{
				var post = this.store.createRecord('user', this.get('model'));				
				post.save().then(()=>{
					this.transitionToRoute('users');
				});
			}).catch(()=>{
				this.set('showErrors', true);
			});

		}
	}
});