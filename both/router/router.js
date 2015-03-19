Router.configure({
  layoutTemplate: 'layout',
   waitOn: function() { return Meteor.subscribe('contacts'); }
 });
 
 Router.route('/', {name: 'home'});
 Router.route('/contactsList', {name: 'contactsList'});