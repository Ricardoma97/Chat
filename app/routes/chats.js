import Route from '@ember/routing/route';

export default Route.extend({
	 firebaseApp: Ember.inject.service(),
	model () {
		return Ember.RSVP.hash({
	      user: this.store.findAll('user'),
	      chat: this.store.findAll('chat')
	    });
		//return this.store.findAll('chat');

	},

	setupController (controller, models) {
		let currus  = models.user.filterBy('uid', this.get('session').get('uid')).objectAt(0);
		let chat = models.chat.filterBy('to', currus.data.name);
		controller.set('chats', chat);
	}
});
