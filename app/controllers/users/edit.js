import Ember from 'ember';
import UserValidations from '../../validations/user';

export default Ember.Controller.extend( {
	UserValidations,
	actions: {
		save(changeset){
			changeset.validate().then(()=>{
				if(changeset.get("isValid")){
					changeset.save().then(()=>{
						this.transitionToRoute('users');
					})
				}
			})
		}
	}
});
