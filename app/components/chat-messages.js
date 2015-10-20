import Ember from 'ember';
import ENV from 'pusher-chat/config/environment';

export default Ember.Component.extend({
  currentUser: Ember.inject.service('current-user'),
  messages: [],
  init() {
    this._super(...arguments);
    this.set('pusher', new Pusher(ENV.APP.PUSHER.key, {
      encrypted: true,
    }));

    const channel = this.get('pusher').subscribe('chat-channel');

    channel.bind('new_message', (data) => {
      this.get('messages').pushObject(data);
    });
  },
  actions: {
    newMessage() {
      const text = this.get('newMessage');
      const user = this.get('currentUser').user();
    }
  }
});
