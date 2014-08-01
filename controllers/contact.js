Blogger.ContactController = Ember.Controller.extend({
  messageSent: false,

  actions: {
    sendMessage: function() {
      prompt('Message content:');
      alert('Message sent!');
      this.set('messageSent', true);
    }
  }
});
