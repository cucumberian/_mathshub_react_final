import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";
import { database } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { set } from "firebase/database";
import { ref } from "firebase/database";
import { get } from "firebase/database";
import { v1 as uuidv1 } from "uuid";

function useAuth() {
  const [authUser, setAuthUser] = useState(null);

  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
      setAuthUser(null);
    };
  }, []);

  const loginFunc = (email, password) => {
    setLoginError(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthUser(userCredential.user);
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  const logoutFunc = () => {
    auth.signOut().catch(console.error);
  };

  const sendData = (payload) => {
    if (authUser === null)
      return Promise.reject(new Error("User is not authenticated"));
    // генерация ид для собщения
    const uuid = uuidv1();
    // ссылка на путь в базе данных
    const dbRef = ref(database, `/userAnswers/${authUser.uid}/${uuid}/`);
    return set(dbRef, payload);
  };

  const getData = () => {
    if (authUser === null)
      return Promise.reject(new Error("User is not authenticated"));
    const dbRef = ref(database, `/userAnswers/${authUser.uid}`);
    return get(dbRef);
  };

  return { authUser, setAuthUser, loginFunc, logoutFunc, sendData, getData };
}

export { useAuth };
