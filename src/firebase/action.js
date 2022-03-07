import { ref, set } from "firebase/database";
import { db } from "./index";

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
