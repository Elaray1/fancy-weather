window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;

recognition.start();

recognition.addEventListener('result', (e) => {
  console.log(e);
});
