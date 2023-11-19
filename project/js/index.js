// Khởi tạo logic hoạt động web tại đây.
const init = () => {
  console.log("Windows Loaded");
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyB1aAxjW2udhB8fjNepebKVhhFo_Y0mDnA",
      authDomain: "nps-jsi15-tx.firebaseapp.com",
      projectId: "nps-jsi15-tx",
      storageBucket: "nps-jsi15-tx.appspot.com",
      messagingSenderId: "789503528548",
      appId: "1:789503528548:web:2773151d30a497414d5971",
      measurementId: "G-M5Q95JQRD9"
    };
  firebase.initializeApp(firebaseConfig);
    
  view.setActiveScreen("mainscreen");

}

window.onload = init;