// src/hooks/useAuth.ts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/Database/firebase";
import { setUserDetails } from "../redux/userSlice";
import { RootState } from "@/redux/store/store";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const db = getFirestore();
        const userRef = doc(db, `users/${user.uid}`);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          dispatch(
            setUserDetails({
              profilePicUrl: data.profilePic || "",
              name: data.name || "",
              email: user.email || "",
            })
          );
        }
      } else {
        dispatch(setUserDetails({ profilePicUrl: "", name: "", email: "" }));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return user;
};

export default useAuth;
