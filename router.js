Client.Router.map(function() {
  this.resource('emails', {path: '/'});
  this.resource('new-email');
  this.resource('email', {path: 'emails/:email_id'});
});
