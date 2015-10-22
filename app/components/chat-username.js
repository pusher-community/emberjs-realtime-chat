import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    userSubmittedName() {
      this.get('currentUser').setUser(this.get('userName'));
      this.set('nameIsSet', true);
    },
  }
});
