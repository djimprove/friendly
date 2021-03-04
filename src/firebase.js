import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwn6lNq7zuG2slSm20wrXwBVoXFgSQ9WE",
  authDomain: "friendly-chat-93297.firebaseapp.com",
  projectId: "friendly-chat-93297",
  storageBucket: "friendly-chat-93297.appspot.com",
  messagingSenderId: "1924423367",
  appId: "1:1924423367:web:64518e320883fc928128e2",
  measurementId: "G-NWF9Y979G6",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const collections = {
  userCollection: db.collection("users"),
  friendsCollection: db.collection("friends"),
  onlineCollection: db.collection("onlinepeaple"),
  messagesCollection: db.collection("messages"),
};

export { collections, auth, provider };
