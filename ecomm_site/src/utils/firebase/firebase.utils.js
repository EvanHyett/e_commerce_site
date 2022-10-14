import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDy1g1y8-xmo9kdTqzw7XIK7zok1XXIsV0",
    authDomain: "crown-db-4a890.firebaseapp.com",
    projectId: "crown-db-4a890",
    storageBucket: "crown-db-4a890.appspot.com",
    messagingSenderId: "693645511656",
    appId: "1:693645511656:web:a47028e4fa1e0fa9a0725d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);