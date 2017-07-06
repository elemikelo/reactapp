// Renderiza todos nuestros componentes en el DOM
import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

import App from './components/App'

firebase.initializeApp({
  apiKey: 'AIzaSyBpfWHZWjVSY9ZDEtGrJ0msXr1Ll4Dr9h8',
  authDomain: 'proyecto-react.firebaseapp.com',
  databaseURL: 'https://proyecto-react.firebaseio.com',
  projectId: 'proyecto-react',
  storageBucket: 'proyecto-react.appspot.com',
  messagingSenderId: '282514021775'
})


render(<App />, document.getElementById('root'))