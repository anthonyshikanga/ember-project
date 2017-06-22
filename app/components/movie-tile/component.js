import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(movie, params) {
      this.sendAction('update', movie, params);
    },
  }
});
