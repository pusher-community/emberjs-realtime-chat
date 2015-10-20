import Ember from 'ember';
import $ from 'jquery';
import ENV from 'pusher-chat/config/environment';

export default Ember.Component.extend({
  currentUser: Ember.inject.service('current-user'),
  pusher: Ember.inject.service('pusher'),
  messages: ['Hi there!', 'Welcome to your chat app!'].map((message) => {
    return {
      username: 'pusher',
      time: new Date(),
      text: message,
    };
  }),
  init() {
    this._super(...arguments);

    this.get('pusher').onMessage((data) => {
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
