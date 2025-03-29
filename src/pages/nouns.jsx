import React, { useState, useEffect } from 'react';
import { LuArrowRight, LuLanguages, LuSettings } from "react-icons/lu";
import HintButton from '../components/hint';
import CaseSwitch from '../components/case';

const NounsPage = () => {
    const [feedback, setFeedback] = useState('');
    const [randomTemplate, setRandomTemplate] = useState('');
    const [selectedOption, setSelectedOption] = useState('Dative'); // Default state
    const [inputValue, setInputValue] = useState('');

    // This will update the selectedOption state in the parent when CycleButton changes
    const handleOptionChange = (newOption) => {
        setSelectedOption(newOption);
        generateSentence();
    };

    // generate sentences
    const nounPairs = [
    { nominative: "книга", translation: "book", genitive: "книги", prepositional: "книге", dative: "книге" },
    { nominative: "город", translation: "city", genitive: "города", prepositional: "городе", dative: "городу" },
    { nominative: "дом", translation: "house", genitive: "дома", prepositional: "доме", dative: "дому" },
    { nominative: "машина", translation: "car", genitive: "машины", prepositional: "машине", dative: "машине" },
    { nominative: "стол", translation: "table", genitive: "стола", prepositional: "столе", dative: "столу" },
    { nominative: "телефон", translation: "phone", genitive: "телефона", prepositional: "телефоне", dative: "телефону" },
    { nominative: "друг", translation: "friend", genitive: "друга", prepositional: "друге", dative: "другу" },
    { nominative: "семья", translation: "family", genitive: "семьи", prepositional: "семье", dative: "семье" },
    { nominative: "студент", translation: "student", genitive: "студента", prepositional: "студенте", dative: "студенту" },
    { nominative: "школа", translation: "school", genitive: "школы", prepositional: "школе", dative: "школе" },
    { nominative: "река", translation: "river", genitive: "реки", prepositional: "реке", dative: "реке" },
    { nominative: "море", translation: "sea", genitive: "моря", prepositional: "море", dative: "морю" },
    { nominative: "учитель", translation: "teacher", genitive: "учителя", prepositional: "учителе", dative: "учителю" },
    { nominative: "магазин", translation: "store", genitive: "магазина", prepositional: "магазине", dative: "магазину" },
    { nominative: "чашка", translation: "cup", genitive: "чашки", prepositional: "чашке", dative: "чашке" }
  ];

  const sentenceTemplates = {
    genitive: [
        `У меня нет _____.`,
        `Я боюсь _____.`,
        `Для _____.`,
        `У нас много _____.`,
        `Это часть _____.`,
        `Я жду начала _____.`
      ],
      prepositional: [
        `Я думаю о _____.`,
        `Она говорит о _____.`,
        `Он мечтает о _____.`,
        `Я смотрю на _____.`,
        `Мы говорили о _____.`
      ],
      dative: [
        `Я дал книгу _____.`,
        `Он подарил подарок _____.`,
        `Мы помогаем _____.`,
        `Я рассказал историю _____.`,
        `Ты пишешь письмо _____.`,
        `Они дали еду _____.`
      ]
    };

    const generateSentence = () => {
        setFeedback(" ");
        
        const randomNoun = nounPairs[Math.floor(Math.random() * nounPairs.length)];
        
        // Randomly select a sentence template based on the selected case (Genitive, Prepositional, Dative)
        let randomTemplate = "";
        
        if (selectedOption === "Genitive") {
          randomTemplate = sentenceTemplates.genitive[Math.floor(Math.random() * sentenceTemplates.genitive.length)];
        } else if (selectedOption === "Prepositional") {
          randomTemplate = sentenceTemplates.prepositional[Math.floor(Math.random() * sentenceTemplates.prepositional.length)];
        } else if (selectedOption === "Dative") {
          randomTemplate = sentenceTemplates.dative[Math.floor(Math.random() * sentenceTemplates.dative.length)];
        } else {
          return; // If the selected option is none of these, exit the function
        }
      
        // Create the sentence with a blank (_____) that will be filled in with the appropriate noun form
        const sentenceWithBlank = randomTemplate;
      
        // Replace the blank with the correct form of the noun based on the selected option
        let filledSentence = "";
      
        if (selectedOption === "Genitive") {
          filledSentence = randomTemplate.replace("_____", randomNoun.genitive);
        } else if (selectedOption === "Prepositional") {
          filledSentence = randomTemplate.replace("_____", randomNoun.prepositional);
        } else if (selectedOption === "Dative") {
          filledSentence = randomTemplate.replace("_____", randomNoun.dative);
        }
      
        // Update the state with the sentence and noun data
        setSentenceData({
          sentenceWithBlank,
          sentence: filledSentence,
          translation: randomNoun.translation,
          nounNominative: randomNoun.nominative,
          nounPrepositional: randomNoun.prepositional,
          nounGenitive: randomNoun.genitive,
          nounDative: randomNoun.dative,
        });
      };
      

  const [sentenceData, setSentenceData] = useState({
    sentenceWithBlank: '',
    sentence: '',
    translation: '',
    nounNominative: '',
    nounPrepositional: '',
    nounGenitive: '',
    nounDative: ''
  });

  // fetch hint
  function fetchHint(word) {
    if (!word || word.length === 0) return '';
    return '-' + word.slice(-1);
  }  
  
    // Check if correct
  function isCorrect(userInput, correctForm) {
    const cleanedInput = userInput.trim().toLowerCase();
    const cleanedCorrect = correctForm.trim().toLowerCase();
    return cleanedInput === cleanedCorrect;
  }
  
  // Example correct form (you can update this dynamically)
  const correctForm = sentenceData.nounPrepositional;
  
  function checkAnswer() {
    const userInput = document.getElementById("conjugation").value;
    const feedbackStyle = document.getElementById("feedback");
  
    if (isCorrect(userInput, correctForm)) {
      setFeedback("Correct!")
      feedbackStyle.style.color = "green";
    } else {
      setFeedback("Incorrect. Try again.")
      feedbackStyle.style.color = "red";
    }
  }

  
  // clear input function

  function clearInput() {
    const inputField = document.getElementById("conjugation")
    inputField.value = '';
  }
  
  const handleNextSentence = () => {
    generateSentence();
    clearInput();
  }

  useEffect(() => {
    generateSentence();
  }, []);

    return (
        <div className="App relative min-h-screen">
        <header className="App-header">
            <div class="max-w-base mx-auto bg-stone-700 rounded-xl shadow-md overflow-hidden p-10">
            <div className='flex justify-center items-center'>
            <LuLanguages className="mt-4" size={40}></LuLanguages>
            </div>
            <div className='text-clip'>
                <p className='inter-bold mt-5 text-2xl'>{sentenceData.sentenceWithBlank}</p>
            </div>
            <div class="p-5">
            <input type="text" id="conjugation" class="bg-stone-500 border border-stone-700 text-white text-base text-center rounded-full block w-full p-2.5" required />
            <p className='inter-bold text-base mt-2'>{sentenceData.nounNominative} ({sentenceData.translation})</p>
            <p id='feedback' className='mt-4 inter-bold text-base'>{feedback}</p>
                <div className='flex justify-center mt-4'>
                <button onClick={checkAnswer} id="check" class="m-2 px-4 py-2 bg-blue-500 inter-bold text-white text-base rounded hover:bg-blue-600 transition">
                    Check
                </button>
                <HintButton hintText={fetchHint(sentenceData.nounPrepositional)}></HintButton>
                <button class="m-2 px-4 py-2 bg-neutral-500 inter-bold text-white text-base rounded hover:bg-emerald-600 transition" onClick={handleNextSentence}>
                    <LuArrowRight className='m-1' size={20}></LuArrowRight>
                </button>
                </div>
                
            </div>
            <div className='flex justify-center items-center'>
                <CaseSwitch onChange={handleOptionChange}></CaseSwitch>
            </div>
            
            </div>
        </header>
        </div>
    );
}

export default NounsPage;