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
		this.createOption(); 
		this.model = new Trip();
	},

	createDayBtn: function() {
  //<yuck>
  var view = new DayButtonView ({model: dayModel }).render();
  this.$el.find('#day-btn-container').append(view.$el);
  //</yuck>
	},

	createDropDown: function() {
 	var view = new ActivitySelectView().render();
  	this.$el.find('#rid, #tid, #hid').append(view.$el);
	}, 

	createOption: function(){
		var view = new ActivityOptionView().render(); 
		this.$el.find('.dropdown-menu').append(view.$el)
	}
})

