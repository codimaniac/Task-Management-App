import { useAuthState } from "../hooks/useAuthState"
import { auth } from "../utils/firebaseConfig"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({children}) => {
  const [user, loading] = useAuthState(auth)

  if(loading) {
    return <p>Loading.....</p>
  }

  if(!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoutes