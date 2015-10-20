import Ember from 'ember';
import ENV from 'pusher-chat/config/environment';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    this.set('pusher', new Pusher(ENV.APP.PUSHER.key, {
      encrypted: true,
    }));
  },

  onMessage(fn) {
    const channel = this.get('pusher').subscribe('messages');
    channel.bind('new_message', fn);
  }
});
