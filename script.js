// Get DOM elements
const speakButton = document.getElementById('speak-btn');
const textInput = document.getElementById('text-input');

// Create speech synthesis instance
const synth = window.speechSynthesis;

// Function to convert text to speech
function convertToSpeech() {
  // Retrieve user input
  const text = textInput.value;

  // Create a new SpeechSynthesisUtterance
  const speechUtterance = new SpeechSynthesisUtterance(text);

  // Speak the text
  synth.speak(speechUtterance);
}

// Event listener for speak button click
speakButton.addEventListener('click', convertToSpeech);
function Redirect(){
  window.location.href='try.html';

}
function goBackToHomePage() {
  history.go(-1); // Go back one page in the history (-1 means the previous page)
}
