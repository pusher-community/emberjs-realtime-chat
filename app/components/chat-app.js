import Ember from 'ember';

export default Ember.Component.extend({
  currentUserService: Ember.inject.service('current-user'),
  nameIsSet: Ember.computed('currentUserService.user', function() {
    return this.get('currentUserService').hasUser();
  })
});
