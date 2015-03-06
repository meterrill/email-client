Client.NewEmailController = Ember.Controller.extend({
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        sender: this.get('sender'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      newEmail.save();

      this.set('sender', null);
      this.set('subject', null);
      this.set('body', null);

      this.transitionToRoute('emails');
    }
  }
});
