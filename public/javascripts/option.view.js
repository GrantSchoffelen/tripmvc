var ActivityOptionView = Backbone.View.extend( {
  buildHTML : _.template($('#option_template').html()),
  // buildOptions: _.template($('#option_template').html())
  render: function() {
    this.$el.html(this.buildHTML());
    return this; 
}

})
