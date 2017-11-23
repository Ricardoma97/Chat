import Controller from '@ember/controller';

export default Controller.extend({
	 firebaseApp: Ember.inject.service(),
	 email: null,
	 password: null,
  actions: {
    signUp(email, password, username, pass) {
      // let controller = this;
          this.get('firebaseApp').auth().createUserWithEmailAndPassword(email, password).then(() => {
            let controller = this;
      this.get('session').open('firebase', {
        provider: pass,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        var newUser= this.store.createRecord('user',{
        uid: this.get('session').get('uid'),
        name: this.get('username'),
        mail: this.get('email'),
      });
      newUser.save();
        controller.set('email', null);
        controller.set('password', null);
        this.transitionToRoute('inicio');
        this.set('email', null);
          this.set('password', null);
      }, (error) => {
        console.log(error);
      });
      });
      // this.get('firebase').createUser({
      //   email: this.get('email') || '',
      //   password: this.get('password') || '',
      // }, (error, data) => {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //   }
      // });
    }
  }
});
