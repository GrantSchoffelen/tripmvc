var ActivitySelectView = Backbone.View.extend( {
  buildHTML : _.template($('#dropdown_template').html()),
  render: function() {

    this.setElement(this.buildHTML({}));
    return this; 
}

})








