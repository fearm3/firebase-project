import firebase from "./firebase";
import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  query,
  remove,
  child,
  update,
} from "firebase/database";

export const addInfo = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "contact");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  // console.log("add data");
};
export const useFetch = () => {
  const [contactList, setContactList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "contact");
    
    onValue(query(userRef), (snapshot) => {
      const contacts = snapshot.val();
      //   console.log(snapshot.val());
      //send an array of the values in database
      const contactArray = [];
      for (let id in contacts) {
        contactArray.push({ id, ...contacts[id] });
      }
      setContactList(contactArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const deleteInfo = (id) => {
  const db = getDatabase();
  //   const userRef = ref(db, "contact");
  remove(ref(db, "contact/" + id));
};

export const updateInfo = (info) => {
  const db = getDatabase();
  const newUserKey = push(child(ref(db), "contact/")).key;
  const updates = {};
  updates["contacts/" + newUserKey] = info;
  return update(ref(db), updates);
};
