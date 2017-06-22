import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    cancelReviewForm(){
      this.set('addNewReview',false)
    },
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        movie: this.get('movie'),
        revieweDate: new Date(),
      };
      this.set('author',null);
this.set('content',null);
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
