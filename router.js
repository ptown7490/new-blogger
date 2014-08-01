Blogger.Router.map(function() {
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email', {path: 'not-snail-mail'});
  });
  this.resource('posts', {path: '/'});
  this.resource('post', {path: ':post_id'});
  this.resource('comments');
});
