import Ember from 'ember';
import PostValidations from 'users-demo-app/mixins/validations/user';

export default Ember.Controller.extend(PostValidations, {
	showErrors: true,
	actions: {
		save: function(model) {
			this.validate().then(()=>{			

				model.save();
				this.transitionToRoute('users');
				
			}).catch(()=>{

			})
		}
	}	
});
