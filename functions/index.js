
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

//functions
const functions = require('firebase-functions');
exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  return original;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
//   return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
//     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//     return res.redirect(303, snapshot.ref.toString());
//   });
});

exports.returnText = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    return original;
  });

  // Always change the value of "/hello" to "world!"
exports.hello = functions.database.ref('/hello').onWrite(event => {
    // set() returns a promise. We keep the function alive by returning it.
    // return event.data.ref.set('world!').then(() => {
    //   console.log('Write succeeded!');
    //   return null;
    // });
    res.send("Hello");
  });