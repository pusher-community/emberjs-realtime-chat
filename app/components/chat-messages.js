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
  messageObserver: Ember.observer('messages.length', function() {
    Ember.run.scheduleOnce('afterRender', function() {
      $("#message-list").scrollTop($("#message-list").height());
    });
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

      if (!text) return;

      const username = this.get('currentUser').user();
      const time = new Date();

      const urlBase = ENV.APP.SERVER_URL;

      $.post(`${urlBase}/messages`, { text, username, time });

      this.set('newMessage', '');
    }
  }
});
