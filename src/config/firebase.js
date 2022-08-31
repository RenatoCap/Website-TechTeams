import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { config } from './config.js';

export function initialize() {
    const firebaseApp = initializeApp(config.firebase);
    const firestore = getFirestore(firebaseApp);
    return { firebaseApp, firestore};
}


