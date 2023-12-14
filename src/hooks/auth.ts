import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [isInitializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    return auth().onAuthStateChanged((user) => {
      setUser(user);
      setInitializing(false);
    });
  }, []);

  return { user, isInitializing };
}
