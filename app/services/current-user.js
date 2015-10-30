import Ember from 'ember';

export default Ember.Service.extend({
  user: null,

  setUser(username) {
    this.set('user', username);
  },

  hasUser() {
    return this.get('user') != undefined;
  }
});
