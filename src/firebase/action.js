import { ref, set, get } from "firebase/database";
import { db } from "./index";

import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth();

export const addRow = async (data, index, uid) => {
  try {
    await set(ref(db, `${uid}/${index}`), [...data]);

    console.log("New row added");
  } catch (err) {
    console.log(err);
  }
};

export const save = async (data, uid, cb) => {
  try {
    const jobData = [...data];

    jobData.shift();

    jobData.shift();

    await set(ref(db, `${uid}`), jobData);

    cb(false, true);
  } catch (err) {
    console.log(err);
  }
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

export const getAllJobData = async (uid, cb) => {
  var jobsRef = ref(db, uid);

  const jobs = [];

  const snapshot = await get(jobsRef);

  if (snapshot.exists()) {
    snapshot.forEach((child) => {
      jobs.push(child.val());
    });
  } else {
    cb(true, false);
  }

  return jobs;
};
