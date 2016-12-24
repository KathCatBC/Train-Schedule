




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBB7-HCnEi21ox3JuxWgjIHCmfFnUgPGBI",
    authDomain: "train-schedule-66db2.firebaseapp.com",
    databaseURL: "https://train-schedule-66db2.firebaseio.com",
    storageBucket: "train-schedule-66db2.appspot.com",
    messagingSenderId: "743138719065"
  };
  firebase.initializeApp(config);

  var database = firebase.database();



$("#addTrain-btn").on("click", function(event) {   

   // Grabs user input
    var trnName = $(".trainName").val().trim();
    var trnDest = $(".trainDestination").val().trim();
    var trnStart = moment($(".trainFirstTime").val().trim(), "HH:mm").format("HH:mm");
    var trnFreq = $(".trainFrequency").val().trim();

    // Creates local "temporary" object for holding employee data
    var newTrain = {
      route: trnName,
      dest: trnDest,
      start: trnStart,
      freq: trnFreq
    };

    // Uploads train data to the database
    database.ref().push(newTrain);

    // Logs everything to console
    console.log(newTrain.route);
    console.log(newTrain.dest);
    console.log(newTrain.start);
    console.log(newTrain.freq);

  // Alert
    alert("Train successfully added");

    // input value
    $(".trainName").val("");
    $(".trainDestination").val("");
    $(".trainFirstTime").val("");
    $(".trainFrequency").val("");

    // Prevents moving to new page
    return false;
});


database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trnName = childSnapshot.val().name;
  debugger;

  var trnName = childSnapshot.val().route;
  var trnDest = childSnapshot.val().dest
  var trnStart = childSnapshot.val().start;
  var trnFreq = childSnapshot.val().freq;

  // Employee Info
  console.log(trnName);
  console.log(trnDest);
  console.log(trnStart);
  console.log(trnFreq);

  // // Prettify the employee start
  // var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

 

  // Add each train's data into the table
  $("#trainTable > tbody").append("<tr><td>" + trnName + "</td><td>" + trnDest + "</td><td>" +
  trnFreq + "</td><td>" + "?? must calc" + "</td><td>" + "?? must calc ??" + "</td></tr>");
});





