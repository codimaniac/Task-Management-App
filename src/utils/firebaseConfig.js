// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export const errorMessage = ""

const handleSignInWithPassword = async (email, password, toast, navigate) => {
  try {
    const userDetails = await signInWithEmailAndPassword(auth, email, password)

    // create a user in firestore if not exists
    const userDocRef = doc(db, "users", userDetails.user.uid);
    await setDoc(userDocRef, {
      fullname: userDetails.user.displayName,
      email: userDetails.user.email,
      profilePic: userDetails.user.photoURL
    }, { merge: true });
    
    console.log("Signed in with password: ", userDetails.user.displayName)
    navigate("/");
  } catch (err) {
    toast.error('Invalid login credentials', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
}

const handleSignInWithGoogle = async (navigate) => {
  try {
    const userDetails = await signInWithPopup(auth, provider)

    // create a user in firestore if not exists
    const userDocRef = doc(db, "users", userDetails.user.uid);
    await setDoc(userDocRef, {
      fullname: userDetails.user.displayName,
      email: userDetails.user.email,
      profilePic: userDetails.user.photoURL
    }, { merge: true });

    console.log("Signed In with Google: ", userDetails.user.uid)

    navigate("/");
  } catch (err) {
    console.error("Error Signing in with Google: ", err)
  }
}

const handleCreateUser = async (email, password, navigate) => {
  try {
    const userDetails = await createUserWithEmailAndPassword(auth, email, password)

    // create a user in firestore if not exists
    const userDocRef = doc(db, "users", userDetails.user.uid);
    await setDoc(userDocRef, {
      fullname: userDetails.user.displayName,
      email: userDetails.user.email,
      profilePic: userDetails.user.photoURL
    }, { merge: true });

    console.log("User created succesfully: ", userDetails)
    navigate("/")
  }
  catch (err) {
    console.log("Error creating account: ", err)
  }
}

const handleUpateProfile = async (fullname) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: fullname
    })
  }
  catch (err) {
    console.error("Error updating profile: ", err)
  }
}

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully!")
    })
    .catch((err) => {
      console.error("Error signing out:", err)
    })
}

export { auth, db, handleSignInWithPassword, handleSignInWithGoogle, handleCreateUser, handleUpateProfile, handleSignOut };