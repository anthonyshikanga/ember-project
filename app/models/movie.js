import DS from 'ember-data';

export default DS.Model.extend({
  director:DS.attr(),
  name:DS.attr(),
  description:DS.attr(),
  actor:DS.attr(),
  year:DS.attr(),
  rating:DS.attr(),
  image:DS.attr(),
  stream:DS.attr(),
  reviews: DS.hasMany('review', { async: true }),

});
