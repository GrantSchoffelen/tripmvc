	var temp_days = new DaysCollection();
	var activities = new ActivityCollection(); 

	var HotelsCollection = new ActivityCollection({
	model: Hotel
	});

	HotelsCollection.url = '/hotels';
	HotelsCollection.fetch();


	var tripViewInstance = new TripView();

	var dayModel = new Day();

