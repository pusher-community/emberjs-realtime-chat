import Ember from 'ember';

export default Ember.Component.extend({
  currentUserService: Ember.inject.service('current-user'),
  actions: {
    userSubmittedName() {
      this.get('currentUserService').setUser(this.get('userName'));
    },
  }
});
