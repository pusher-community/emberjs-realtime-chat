import Ember from 'ember';

export default Ember.Component.extend({
  timestamp: Ember.computed('message', function() {
    return strftime('%H:%M:%S %P', new Date(this.get('message').time))
  })
});
