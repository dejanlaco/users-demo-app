import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
    this.route('new');
    this.route('edit', { path: '/edit/:edit_id' });
  });
});

export default Router;