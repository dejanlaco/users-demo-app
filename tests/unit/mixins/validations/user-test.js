import Ember from 'ember';
import ValidationsUserMixin from 'users-demo-app/mixins/validations/user';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/user');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsUserObject = Ember.Object.extend(ValidationsUserMixin);
  let subject = ValidationsUserObject.create();
  assert.ok(subject);
});
