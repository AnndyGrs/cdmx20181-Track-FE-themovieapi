let config = {
    apiKey: "AIzaSyCyS0BC8DRFz9jYbLcd2hX1rNKYdTQswJY",
    authDomain: "autenth-series.firebaseapp.com",
    databaseURL: "https://autenth-series.firebaseio.com",
    projectId: "autenth-series",
    storageBucket: "",
    messagingSenderId: "1082631941932"
};

firebase.initializeApp(config);
let db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);