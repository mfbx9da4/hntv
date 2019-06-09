import dayjs from 'dayjs'

let firebaseWasInjected = false

function injectFirebase() {
  console.log('inject')
  firebaseWasInjected = true
  function load(o, j, v) {
    j = document.createElement('script')
    v = document.getElementsByTagName('script')[0]
    j.async = 1
    j.src = o
    v.parentNode.insertBefore(j, v)
  }
  load('//www.gstatic.com/firebasejs/6.1.0/firebase-app.js')
  // load('//cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js')
  // <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
  load('//www.gstatic.com/firebasejs/6.1.0/firebase-auth.js')
  load('//www.gstatic.com/firebasejs/6.1.0/firebase-database.js')
  load('//www.gstatic.com/firebasejs/6.1.0/firebase-firestore.js')
}

function firebaseIsDefined() {
  return window.firebase && window.firebase.auth
}

function waitForFirebase() {
  return new Promise(function _check(resolve) {
    if (firebaseIsDefined()) {
      console.log('found')
      return resolve()
    }
    setTimeout(() => _check(resolve), 100)
  })
}

function initFirebase() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: 'AIzaSyD_s-VDZiZ-TUCYWvo5aNZr31f09UwaaIU',
    authDomain: 'hacker-news-tv.firebaseapp.com',
    databaseURL: 'https://hacker-news-tv.firebaseio.com',
    projectId: 'hacker-news-tv',
    storageBucket: 'hacker-news-tv.appspot.com',
    messagingSenderId: '99060518381',
    appId: '1:99060518381:web:afa03365093ad8ea',
  }
  // Initialize Firebase
  window.firebase.initializeApp(firebaseConfig)
  console.log('loaded')
}

export async function signin() {
  var provider = new window.firebase.auth.GoogleAuthProvider()
  window.firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken
      // The signed-in user info.
      var user = result.user
      // ...
      console.log('result', result)
    })
    .catch(function(error) {
      console.log('error', error)
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      // ...
    })
}

export class ChatSubscription {
  constructor(chatName = 'chats/live', onMessage = () => {}) {
    if (!firebaseIsDefined()) throw new Error('Firebase not loaded')
    this.ref = window.firebase.database().ref(chatName)
    this.readRef = this.ref.orderByChild('timestamp').limitToLast(100)
    this.readRef.on('child_added', function(data) {
      console.log(
        'child_added',
        data.val().message,
        dayjs(data.val().timestamp).toString(),
        data.val().authorName
      )
      onMessage(data.val())
    })
  }

  write(data) {
    const user = window.firebase.auth().currentUser
    const authorName = user.displayName
    const authorAvatar = user.photoURL
    const authorUid = user.uid
    const row = {
      ...data,
      authorName,
      authorAvatar,
      authorUid,
      timestamp: window.firebase.database.ServerValue.TIMESTAMP,
    }
    console.log('row', row)
    const writeRef = this.ref.push()
    writeRef.set(row)
  }

  destroy() {
    this.ref.off()
    this.readRef.off()
  }
}

export async function serverTime() {
  return new Promise((resolve) => {
    window.firebase
      .database()
      .ref('/.info/serverTimeOffset')
      .once('value')
      .then(
        function stv(data) {
          resolve(data.val() + Date.now())
        },
        function(err) {
          return err
        }
      )
  })
}

export default async function main() {
  if (firebaseWasInjected || firebaseIsDefined()) return
  console.log('notdefined')
  injectFirebase()
  await waitForFirebase()
  initFirebase()
  console.log('return')
}
