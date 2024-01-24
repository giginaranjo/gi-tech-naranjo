import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDF37Tml3QvbWhpyJEZFmo62gEoI_29Bx4",
  authDomain: "gigi-tech.firebaseapp.com",
  projectId: "gigi-tech",
  storageBucket: "gigi-tech.appspot.com",
  messagingSenderId: "405892927541",
  appId: "1:405892927541:web:c954fa4478143e108f217c"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
