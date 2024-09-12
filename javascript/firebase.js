import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCu5MUxAsksT4gl2HXMYOIVbNxDmZkyMJY",
    authDomain: "english-course-7821b.firebaseapp.com",
    projectId: "english-course-7821b",
    storageBucket: "english-course-7821b.appspot.com",
    messagingSenderId: "236035982541",
    appId: "1:236035982541:web:e864075d7c50fe7b655584",
    measurementId: "G-CLR6W10LQQ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para adicionar palavra
async function addWord(portuguese, english) {
  try {
    const docRef = await addDoc(collection(db, "words"), {
      portuguese: portuguese,
      english: english
    });
    console.log("Palavra adicionada com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar palavra: ", e);
  }
}

// Escutar o evento de envio do formulário
document.getElementById('wordForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const portuguese = document.getElementById('portuguese').value;
  const english = document.getElementById('english').value;
  
  addWord(portuguese, english);
  
  document.getElementById('wordForm').reset();
});
