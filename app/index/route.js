import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      movies: this.store.findAll('movie'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveMovie3(params) {
      var newMovie = this.store.createRecord('movie', params);
      newMovie.save();
      this.transitionTo('index');
    },
  }
});
