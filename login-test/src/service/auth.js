import { firebaseAuth , GoogleAuthProvider } from './firebase'; 

class Auth {
    login(name) {
        const provider = this.getProvider(name);
        return firebaseAuth.signInWithPopup(provider);
    } 
    getProvider(name){
        switch(name){
          case 'Google':
            return GoogleAuthProvider;
          default:
            throw new Error(`${name} is unknown provider.`);
        }
    }
};

export default Auth;