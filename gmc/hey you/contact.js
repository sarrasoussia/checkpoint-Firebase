
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC91Q9o72dO8IYTdgbNuSM6JrH-pzarbJQ",
    authDomain: "test-b0d64.firebaseapp.com",
    databaseURL: "https://test-b0d64.firebaseio.com",
    projectId: "test-b0d64",
    storageBucket: "",
    messagingSenderId: "705627743110",
    appId: "1:705627743110:web:9ac46f57b057c097"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
 
 
  var messagesRef = firebase.database().ref('test');

  function SubmitForm(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var select = document.getElementById('select').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  saveMessage(name,select,email,phone);
  }
  document.getElementById('contactForm').addEventListener('submit', SubmitForm);
  
  function saveMessage(name,select,email,phone) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          select: select,
          email: email,
          phone: phone,
      });
    
  
 }
