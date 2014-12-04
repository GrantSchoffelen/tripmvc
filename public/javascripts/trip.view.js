var TripView = Backbone.View.extend( {

	el: '#trip',

	events: {
	'click #add-day':'addDay',
	},

	addDay:function() {
	temp_days.add({})
	},

	initialize: function () {
		this.listenTo(temp_days, 'add', this.createDayBtn);
		 this.createDropDown();
		this.model = new Trip();
	},

	createDayBtn: function() {
  //<yuck>
  var view = new DayButtonView ({model: dayModel }).render();
  this.$el.find('#day-btn-container').append(view.$el);
  //</yuck>
	},

	createDropDown: function() {
 	var view = new ActivitySelectView ().render();
  	this.$el.find('.choose.hotels').append(view.$el);
	}
})

