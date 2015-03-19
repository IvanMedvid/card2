Template.home.helpers({
	title: "Коротко про мене",
	src: "images/DSC_0059.JPG",
	education: function(){
		var array = ['Катеринівська ЗОШ', 'Технічний коледж ТНТУ', 'ТНТУ імені Івана Пулюя'];
		return array;
	},
	languages: function() {
		var array = ['PHP', 'MySQL', 'HTML', 'JavaScript', 'CSS'];
		return array;
	},
	plans: function() {
		var array = ['освоїти Meteor.js', 'вивчити програмування під Android та iOS'];
		return array;
	}
});