import DS from 'ember-data';

export default DS.Model.extend({
	uid: DS.attr('string'),
	name: DS.attr('string'),
	mail: DS.attr('string')
});
