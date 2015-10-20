import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service('current-user'),
  nameIsSet: Ember.computed(function() {
    return this.get('currentUser').hasUser();
  }),

  actions: {
    userSubmittedName() {
      this.get('currentUser').setUser(this.get('userName'));
      this.set('nameIsSet', true);
    },
  }
});
