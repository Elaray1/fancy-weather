window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;

recognition.start();

recognition.addEventListener('results', (e) => {
  console.log(e);
});
console.log(2);
