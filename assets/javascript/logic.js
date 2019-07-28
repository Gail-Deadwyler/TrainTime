// Steps to complete:

// 1. Create Firebase link
// 2. Create initial train data in database
// 3. Create button for adding new trains - then update the html + update the database
// 4. Create a way to retrieve trains from the trainlist.
// 5. Create a way to calculate the time way. Using difference between start and current time.
// 6. Then take the difference and modulus by frequency. (This step can be completed in either 3 or 4)

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCcPFcbAjIsgXGQwE-A3AcOXkeD40qypE8",
    authDomain: "train-times-93583.firebaseapp.com",
    databaseURL: "https://train-times-93583.firebaseio.com",
    storageBucket: "train-times-93583.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var trainData = firebase.database();