const firebaseConfig = {  
    apiKey: "TU_API_KEY",  
    authDomain: "tu-proyecto.firebaseapp.com",  
    projectId: "tu-proyecto",  
    storageBucket: "tu-proyecto.appspot.com",  
    messagingSenderId: "123456789",  
    appId: "1:123456789:web:abcdef123456"  
  };  
  firebase.initializeApp(firebaseConfig);  
  const db = firebase.firestore();  