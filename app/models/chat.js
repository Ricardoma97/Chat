import DS from 'ember-data';

export default DS.Model.extend({
	from: DS.attr('string'),
	to: DS.attr('string'),
	text: DS.attr('string')
});
