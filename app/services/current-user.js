import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,

  init() {
    this._super(...arguments);
  },

  setUser(username) {
    this.set('currentUser', username);
  },

  hasUser() {
    return this.get('currentUser') != undefined;
  }
});
