import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyC_Nc7rsBcFexh89x63WV-6XWcYnDKQado",
  authDomain: "api-chat-71971.firebaseapp.com",
  projectId: "api-chat-71971",
  storageBucket: "api-chat-71971.appspot.com",
  messagingSenderId: "357611334552",
  appId: "1:357611334552:web:166eb95d880ace28f559ed",
  measurementId: "G-P580RFN77J"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
)