// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, updatePassword, EmailAuthProvider, reauthenticateWithCredential, signOut } from "firebase/auth";

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

const createUserDoc = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(userRef)

    if (!docSnap) {
      await setDoc(userRef, {
        photourl: user.photoURL,
        fullname: user.displayName,
        email: user.email
      }, { merge: true })
    }
  }
  catch (error) {
    console.error("Error creating user document: ", error)
  }
}

const handleSignInWithPassword = async (email, password, toast, navigate) => {
  try {
    const userDetails = await signInWithEmailAndPassword(auth, email, password)
    createUserDoc(userDetails.user)
    
    console.log("Signed in with password: ", userDetails.user.displayName)
    navigate("/");
  } catch (err) {
    if (err.code === 'auth/invalid-credential') {
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
    } else {
      console.error("Error signing in with password: ", err)
    }    
  }
}

const handleSignInWithGoogle = async (navigate) => {
  try {
    const userDetails = await signInWithPopup(auth, provider)
    createUserDoc(userDetails.user)

    console.log("Signed In with Google: ", userDetails.user.displayName)

    navigate("/");
  } catch (err) {
    console.error("Error Signing in with Google: ", err)
  }
}

const handleCreateUser = async (email, password, navigate) => {
  try {
    const userDetails = await createUserWithEmailAndPassword(auth, email, password)
    createUserDoc(userDetails.user)

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

const handleUpdatePassword = async (currentPassword, newPassword) => {
  try {
    const user = auth.currentUser
    const credential = EmailAuthProvider.credential(
      user.email, 
      currentPassword
    )

    await reauthenticateWithCredential(user, credential)

    await updatePassword(user, newPassword)

    console.log("Password updated successfully!")
  }
  catch (err) {
    console.error("Error updating password: ", err)
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

export { auth, db, handleSignInWithPassword, handleSignInWithGoogle, handleCreateUser, handleUpateProfile, handleUpdatePassword, handleSignOut };