import Ember from 'ember';

export default Ember.Component.extend({
  addNewMovie: false,
  actions: {
    cancelMovieForm(){
      this.set('addNewMovie',false);
    },
    movieFormShow() {
      this.set('addNewMovie', true);
    },

    saveMovie1() {
      var params = {
        name: this.get('name'),
        year: this.get('year'),
        description: this.get('description'),
        director: this.get('director'),
        rating: this.get('rating'),
        image: this.get('image'),
        stream: this.get('stream'),
        actor: this.get('actor'),


      };
      this.set('name',null);
      this.set('actor',null);
      this.set('year',null);
      this.set('description',null);
      this.set('director',null);
      this.set('image',null);
      this.set('stream',null);
      this.set('rating',null);
      this.set('addNewMovie', false);
      this.sendAction('saveMovie2', params);
    }
  }
});
