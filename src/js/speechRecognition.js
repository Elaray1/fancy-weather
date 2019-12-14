window.onload = function () {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const searchInput = document.getElementById('search-input');

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.start();

  recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');

    searchInput.value = transcript;
  });

  recognition.addEventListener('end', recognition.start);
};
