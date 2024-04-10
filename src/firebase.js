import firebase from "firebase";

// const firebaseConfig = {
// 	apiKey: "AIzaSyAR7S1awI-whl6ygU8t7cZSR51WcqEUzEY",
// 	authDomain: "reactshoppy.firebaseapp.com",
// 	databaseURL: "https://reactshoppy.firebaseio.com",
// 	projectId: "reactshoppy",
// 	storageBucket: "reactshoppy.appspot.com",
// 	messagingSenderId: "794772090500",
// 	appId: "1:794772090500:web:98a042382537b014d6dcd1",
// };

const firebaseConfig = {
	apiKey: "AIzaSyBbCsDUsoDnj1aPWhdkTKzSs4gKe9u1UFY",
	authDomain: "onlineshop-540fc.firebaseapp.com",
	projectId: "onlineshop-540fc",
	storageBucket: "onlineshop-540fc.appspot.com",
	messagingSenderId: "503605397907",
	appId: "1:503605397907:web:7de275e74c7ac71d2cc066"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
