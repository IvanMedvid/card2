Template.layout.events({
	"click #1": function(event, template) {
		template.$('#2').removeClass('active');
		template.$('#1').addClass('active');
	},
	"click #2": function(event, template) {
		template.$('#1').removeClass('active');
		template.$('#2').addClass('active');
	}
})