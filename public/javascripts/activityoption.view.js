var ActivityOptionView = Backbone.View.extend( {

 render: function() {
    this.setElement(this.buildHTML({ type: hotel}));
    return this; 


}

})