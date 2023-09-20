import React, { useEffect, useState } from 'react';
export default function Assistant(props)
{ 
	const [synth, setSynth] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
    useEffect(() => {
    // Initialize the synth when the component is mounted
    const synthInstance = window.speechSynthesis;
    setSynth(synthInstance);
  }, []);


     const speakContent = () => {
    const content = document.getElementById('history-content');
    if (synth && content) {
      synth.cancel(); // Cancel any previous utterance



    const femaleVoice = synth.getVoices().find((voice) => {
      return voice.lang === selectedLanguage && voice.name.includes('Female');
    });

      // Split the content into paragraphs
      const paragraphs = content.querySelectorAll('p');
      
      // Iterate through paragraphs and speak each one
      paragraphs.forEach((paragraph) => {
        const utterance = new SpeechSynthesisUtterance(paragraph.textContent);
        
        // Set voice options (optional)
        utterance.lang = selectedLanguage; // Set the selected language
        utterance.voice = synth.getVoices().find((voice) => voice.lang === selectedLanguage);

        // Speak the paragraph

        if (femaleVoice) {
        utterance.voice = femaleVoice; // Use the female voice if found
      }

        synth.speak(utterance);
      });
    }
  };
  const handlePause=()=>
  {
  	console.log(synth.paused)
 if(synth)
 {
 	if( synth.paused)
 		synth.resume();
 	else
 	synth.pause();

}
  }

  const handleStop = () => {

    if (synth) {
      synth.cancel(); // Cancel the current utterance
    }
  };


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

	return (<>

	<div className="assist-wrap">
	<i className="bi bi-volume-down-fill asist-icon" onClick={speakContent}></i>
	<i className="bi bi-pause asist-icon" onClick={handlePause}></i>
	<i className="bi bi-stop-fill asist-icon" onClick={handleStop}></i>
	  <label>
       
        <select value={selectedLanguage} className="bi bi-pause" onChange={handleLanguageChange}>
          <option value="en-US">English (United States)</option>
          <option value="es-ES">Spanish (Spain)</option>
          <option value="fr-FR">French (France)</option>
          <option value="kn-IN">Kannada (India)</option>
           <option value="ml-IN">Malayalam (India)</option> {/* Add Malayalam */}
    <option value="ta-IN">Tamil (India)</option> {/* Add Tamil */}
    <option value="te-IN">Telugu (India)</option> {/* Add Telugu */}
    <option value="hi-IN">Hindi (India)</option> {/* Add Hindi */}

          {/* Add more language options as needed */}
        </select>
      </label>
	</div>
		</>)

}