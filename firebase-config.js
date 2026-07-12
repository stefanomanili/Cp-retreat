// Incolla qui la configurazione del TUO progetto Firebase.
// La trovi in: Console Firebase > Impostazioni progetto > Le tue app > SDK setup and configuration
// Sostituisci TUTTI i valori "INSERISCI_..." qui sotto.

var firebaseConfig = {
  apiKey: "INSERISCI_API_KEY",
  authDomain: "INSERISCI_PROGETTO.firebaseapp.com",
  databaseURL: "https://INSERISCI_PROGETTO-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "INSERISCI_PROGETTO",
  storageBucket: "INSERISCI_PROGETTO.appspot.com",
  messagingSenderId: "INSERISCI_SENDER_ID",
  appId: "INSERISCI_APP_ID"
};

// Percorso radice nel Realtime Database dove viene salvato lo stato del quiz.
// Puoi lasciarlo cosi, oppure cambiarlo se vuoi ospitare piu quiz nello stesso progetto Firebase.
var QUIZ_ROOT = "cosaportoQuiz";
