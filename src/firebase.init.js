
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCxwx_puIoGhsih0FANVB9wFoNtbv0ftkc",
    authDomain: "bike-warehouse.firebaseapp.com",
    projectId: "bike-warehouse",
    storageBucket: "bike-warehouse.appspot.com",
    messagingSenderId: "232803590881",
    appId: "1:232803590881:web:5bc09edfb6baea813c0da0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth