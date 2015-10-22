import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,

  user() {
    return this.get('currentUser');
  },

  setUser(username) {
    this.set('currentUser', username);
  },

  hasUser() {
    return this.get('currentUser') != undefined;
  }
});
