Blogger.AboutController = Ember.Controller.extend({
  photoShowing: false,
  actions: {
    showName: function() {
      alert('Dragoola the Terrible');
    },

    deathCount: function() {
      alert('4400');
    },
    showPhoto: function() {
      this.set('photoShowing', true);
    },
    hidePhoto: function() {
      this.set('photoShowing', false);
    }
  }
});
