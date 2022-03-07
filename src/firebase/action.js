import { ref, set } from "firebase/database";
import { db } from "./index";

import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();

export const sendMail = ({ date, email, name, subject, message }, cb) => {
  set(ref(db, `users/${date}`), {
    email,
    name,
    message,
    subject,
  })
    .then(() => cb(null, true))
    .catch((err) => cb(err, false));
};

export const loginWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();

    provider.addScope("user:email");

    provider.addScope("read:user");

    const res = await signInWithPopup(auth, provider);

    const { user } = res;

    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

export const logoutFirebase = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};
