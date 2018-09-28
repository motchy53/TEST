// Action Cable provides the framework to deal with WebSockets in Rails.
<<<<<<< HEAD
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
=======
// You can generate new channels where WebSocket features live using the rails generate channel command.
>>>>>>> origin/master
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
