import { ref, set } from "firebase/database";
import { db } from "./index";

import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth();

export const createJobData = async (data) => {
  await set(ref(db, `${data.uid}`), {
    data,
  });
};

export const loginWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();

    provider.addScope("user:email");

    provider.addScope("read:user");

    await signInWithPopup(auth, provider);
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
