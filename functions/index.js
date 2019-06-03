// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions')
const Chatkit = require('@pusher/chatkit-server')

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin')
admin.initializeApp()

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin
    .database()
    .ref('/messages')
    .push({ original: original })
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString())
})

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:a9652974-4f20-4616-a573-a0a67caa94e9',
  key:
    '873848ca-b077-4984-ab5c-fd7833eddaa3:J1qa8piJlVbeCz4ffRD7sJ71D/H2xoJOD8JjzMZ25To=',
})

exports.identify = functions.https.onRequest(async (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id,
  })

  res.status(authData.status).send(authData.body)
})