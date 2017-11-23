import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		addChat (){
			var newChat= this.store.createRecord('chat',{
				from: this.get('model').filterBy('uid', this.get('session').get('uid')).objectAt(0).data.name,
				to: this.get('to'),
				text: this.get('text'),
			});
			newChat.save();
			this.setProperties({
				from:'',
				to:'',
				text:''
			});
		}
	}
});
