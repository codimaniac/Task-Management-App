// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCOMf4KmVEUnwdndWrplqDAM9Ef2rsf8Y",
  authDomain: "taskly-9f17b.firebaseapp.com",
  projectId: "taskly-9f17b",
  storageBucket: "taskly-9f17b.firebasestorage.app",
  messagingSenderId: "135512887662",
  appId: "1:135512887662:web:2b61447c2c2dc3175f717f",
  measurementId: "G-FZGEY96RQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const errorMessage = ""

const handleSignInWithPassword = async (email, password, toast, navigate) => {
  try {
    const userDetails = await signInWithEmailAndPassword(auth, email, password)
    
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

    console.log("Signed In with Google: ", auth.displayName)

    navigate("/");
  } catch (err) {
    console.error("Error Signing in with Google: ", err)
  }
}

const handleCreateUser = async (email, password) => {
  try {
    const userDetails = await createUserWithEmailAndPassword(auth, email, password)

    console.log(userDetails)
    navigate("/")
  }
  catch (err) {
    console.log("Error creating account: ", err)
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

export { auth, handleSignInWithPassword, handleSignInWithGoogle, handleCreateUser, handleSignOut };