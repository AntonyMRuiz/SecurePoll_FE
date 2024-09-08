"use client"

import { useState } from 'react';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export default function Vote() {
  const [selectedOption, setSelectedOption] = useState(null);

  // Datos quemados de la encuesta
  const poll = {
    title: "Which programming language do you prefer?",
    options: ["JavaScript", "Python", "C++", "Java"],
  };

  const handleVoteSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== null) {
      // Aquí simplemente imprimimos el resultado del voto, en un caso real lo enviarías a tu backend
      console.log(`User voted for: ${poll.options[selectedOption]}`);
      alert(`Thank you for voting! You chose: ${poll.options[selectedOption]}`);
    } else {
      alert("Please select an option to vote.");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" className="text-2xl font-bold text-gray-800 dark:text-gray-100">Secure Poll</a>
        </div>
        
        <div className="flex items-center space-x-2"> 
        <ThemeToggle />
        <w3m-button />  
        </div>  
        
      </div>
    </nav>
      <div className="flex-1 flex flex-col justify-center items-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">{poll.title}</h1>
        <form onSubmit={handleVoteSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
          {poll.options.map((option, index) => (
            <div key={index} className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="pollOption"
                  value={index}
                  onChange={() => setSelectedOption(index)}
                  className="form-radio h-4 w-4 text-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">{option}</span>
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full mt-4"
            disabled={selectedOption === null}
          >
            Submit Vote
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}