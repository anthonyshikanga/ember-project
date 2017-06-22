import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  movie: DS.belongsTo('movie', { async: true }),



});
