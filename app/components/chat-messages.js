import Ember from 'ember';
import $ from 'jquery';
import ENV from 'pusher-chat/config/environment';

export default Ember.Component.extend({
  currentUser: Ember.inject.service('current-user'),
  messages: [],
  init() {
    this._super(...arguments);
    this.set('pusher', new Pusher(ENV.APP.PUSHER.key, {
      encrypted: true,
    }));

    const channel = this.get('pusher').subscribe('messages');

    channel.bind('new_message', (data) => {
      this.get('messages').pushObject(data);
    });
  },
  actions: {
    newMessage() {
      const text = this.get('newMessage');
      const username = this.get('currentUser').user();
      const time = new Date();

      $.ajax({
        type: 'POST',
        url: 'http://localhost:4567/messages',
        data: { text, username, time },
        dataType: 'json',
        jsonp: false,
      });
    }
  }
});
