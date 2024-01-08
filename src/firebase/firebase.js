import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCPzOyO1LjredyqtNfLNez_dEnOYowNyjY",
  authDomain: "wapp-c617c.firebaseapp.com",
  projectId: "wapp-c617c",
  storageBucket: "wapp-c617c.appspot.com",
  messagingSenderId: "1045741976275",
  appId: "1:1045741976275:web:4b37d0fbc4180076f93226",
  measurementId: "G-8VQJ7JSDPR"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });
