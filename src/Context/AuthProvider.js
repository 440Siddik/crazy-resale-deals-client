import { createContext, useState } from "react"
import {getAuth} from 'firebase/auth'
import app from '../Firebase/firebase.config'

const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

const [user, setUser] = useState('')
const [loading, setLoading] = useState(true)

const authinfo = {}

return <AuthContext.Provider value={authinfo}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider;