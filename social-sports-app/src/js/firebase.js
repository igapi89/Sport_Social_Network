import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyATLreDmlMX1s6b7tHxRY1hfRhRdJ_nuRM',
  authDomain: 'sports-social-network-ccece.firebaseapp.com',
  projectId: 'sports-social-network-ccece',
  storageBucket: 'sports-social-network-ccece.appspot.com',
  messagingSenderId: '800099651864',
  appId: '1:800099651864:web:ad311c2d0f096a4cdd0e6d',
  measurementId: 'G-BT1PR4ZK3T'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }
