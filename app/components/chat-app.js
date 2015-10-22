import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  nameIsSet: Ember.computed('currentUser.currentUser', function() {
    return this.get('currentUser').hasUser();
  })
});
