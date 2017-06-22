import Ember from 'ember';

export default Ember.Component.extend({
  updateMovieForm: false,
  actions: {
    cancelMovieForm(){
      this.set('updateMovieForm',false);
    },
    updateMovieForm() {
      this.set('updateMovieForm', true);
    },
    update(movie) {
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
      this.set('updateMovieForm', false);
      this.sendAction('update', movie, params);
    }
}
});
