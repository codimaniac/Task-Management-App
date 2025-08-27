import { useState } from "react";

export const useAuthState = (auth) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  auth.onAuthStateChanged((usr) => {
    if(usr) {
      setUser(usr)
    } else {
      setUser(null)
    }
    setLoading(false)
  })

  return [user, loading]
}
