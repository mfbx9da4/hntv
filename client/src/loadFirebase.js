function addFirebase() {
  function load(o, j, v) {
    j = document.createElement('script')
    v = document.getElementsByTagName('script')[0]
    j.async = 1
    j.src = o
    v.parentNode.insertBefore(j, v)
  }
  load('//www.gstatic.com/firebasejs/6.1.0/firebase-app.js')
  load('//cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js')
  // <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
  load('//www.gstatic.com/firebasejs/6.1.0/firebase-database.js')
  load('//www.gstatic.com/firebasejs/6.1.0/firebase-auth.js')
  load('//www.gstatic.com/firebasejs/6.1.0/firebase-firestore.js')
}

function loadFirebase() {
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
  var ui = new window.firebaseui.auth.AuthUI(window.firebase.auth())
  ui.start('.brand', {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        console.log('authResult', authResult)
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
      },
    },
    signInOptions: [window.firebase.auth.EmailAuthProvider.PROVIDER_ID],
  })
  // window.firebase
  //   .database()
  //   .ref('users/' + 'userId')
  //   .set({
  //     username: 'name',
  //     email: 'email@example.com',
  //     profile_picture: 'http://google.com/imageUrl',
  //   })
}

export default async function main() {
  addFirebase()
  await this.checkFirebase()
  loadFirebase()
}
