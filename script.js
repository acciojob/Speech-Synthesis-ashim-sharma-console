// Your script here.

  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  // 1. Populate the voices dropdown
  function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  // 2. Set the voice
  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    restartSpeech();
  }

  // 3. Set options like rate and pitch
  function setOption() {
    msg[this.name] = this.value;
    if (msg.text.trim()) {
      restartSpeech();
    }
  }

  // 4. Start speaking
  function speak() {
    if (!msg.text.trim()) {
      alert("Please enter some text.");
      return;
    }
    window.speechSynthesis.cancel(); // stop current speech
    window.speechSynthesis.speak(msg);
  }

  // 5. Stop speaking
  function stop() {
    window.speechSynthesis.cancel();
  }

  // 6. Restart speech with updated settings
  function restartSpeech() {
    stop();
    speak();
  }

  // 7. Set initial text
  msg.text = document.querySelector('[name="text"]').value;

  // Events
  window.speechSynthesis.onvoiceschanged = populateVoices;
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', speak);
  stopButton.addEventListener('click', stop);
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)


