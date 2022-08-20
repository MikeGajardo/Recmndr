import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";

const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			currentAlbum: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			addToFavoriteList: async (currentUser, album) => {
				console.log("currentUser", currentUser)
				console.log("album", album)
				const userDocRef = doc(db, "user", currentUser);

				try {
				const docRef = await updateDoc(userDocRef, {
					favList: album
				});
				// console.log("Document written with ID: ", docRef.id);
				} catch (e) {
				console.error("Error adding document: ", e);
				}
				// db.collection(currentUser)
				//   .add({
				// 	album,
				//   })
				//   .then((docRef) => {
				// 	console.log("Document written with ID: ", docRef.id);
				//   })
				//   .catch((error) => {
				// 	console.error("Error adding document: ", error);
				//   });
			  },
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
