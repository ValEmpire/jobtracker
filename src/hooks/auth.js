import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useAuthStatus = () => {
  const auth = getAuth();

  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      setUser(res);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return user;
};

export const useGuard = () => {
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(`/${user.uid}`);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate, auth]);

  return null;
};
