import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";

export default function useAuth(): [FirebaseAuthTypes.User | null, boolean] {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    return auth().onAuthStateChanged((user) => {
      setUser(user);
      setInitializing(false);
    });
  }, []);

  return [user, initializing];
}
