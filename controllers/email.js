Client.EmailController = Ember.ObjectController.extend({
  actions: {
    deleteEmail: function() {
      if(confirm("Are you sure?")){
        var email = this.get('model');
        email.destroyRecord();
        this.transitionToRoute('emails');
      }
    }
  }
});
