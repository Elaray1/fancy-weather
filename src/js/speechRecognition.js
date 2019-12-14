window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;
let isMicro = false;
const microfonImg = document.getElementById('microfon-img');

microfonImg.addEventListener('click', () => {
  if (isMicro) {
    microfonImg.setAttribute('src', 'assets/micro_active.png');
    isMicro = !isMicro;
    recognition.start();
    recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      searchInput.value = transcript;
      console.log(transcript);
    });
  } else {
    microfonImg.setAttribute('src', 'assets/miccrofon.png');
  }
  isMicro = !isMicro;
});
