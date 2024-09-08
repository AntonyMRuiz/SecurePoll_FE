"use client"
import { useState } from 'react';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export default function CreatePoll() {
  const [title, setTitle] = useState('');
  const [candidates, setCandidates] = useState([{ name: '', photo: null }]);
  const [voterIDs, setVoterIDs] = useState(['']);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddCandidate = () => {
    setCandidates([...candidates, { name: '', photo: null }]);
  };

  const handleCandidateChange = (index, field, value) => {
    const newCandidates = [...candidates];
    newCandidates[index][field] = value;
    setCandidates(newCandidates);
  };

  const handlePhotoUpload = (index, event) => {
    const file = event.target.files[0];
    handleCandidateChange(index, 'photo', file);
  };

  const handleAddVoterID = () => {
    setVoterIDs([...voterIDs, '']);
  };

  const handleVoterIDChange = (index, value) => {
    const newVoterIDs = [...voterIDs];
    newVoterIDs[index] = value;
    setVoterIDs(newVoterIDs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la lógica para enviar el formulario de encuesta, incluyendo los archivos de fotos.
    console.log({
      title,
      candidates,
      voterIDs,
      startDate,
      endDate,
    });
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
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Create a Candidate Poll</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
          
          {/* Título de la encuesta */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Poll Title</label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              placeholder="Enter poll title"
              required
            />
          </div>

          {/* Fecha de inicio */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Start Date</label>
            <input 
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              required
            />
          </div>

          {/* Fecha de cierre */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2">End Date</label>
            <input 
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              required
            />
          </div>

          {/* Lista de candidatos */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Candidates</label>
            {candidates.map((candidate, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={candidate.name}
                  onChange={(e) => handleCandidateChange(index, 'name', e.target.value)}
                  className="w-full px-4 py-2 mb-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  placeholder={`Candidate ${index + 1} Name`}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handlePhotoUpload(index, e)}
                  className="mb-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddCandidate}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Add Candidate
            </button>
          </div>

          {/* Lista de cédulas de votantes */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Voter IDs</label>
            {voterIDs.map((voterID, index) => (
              <input
                key={index}
                type="text"
                value={voterID}
                onChange={(e) => handleVoterIDChange(index, e.target.value)}
                className="w-full px-4 py-2 mb-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                placeholder={`Voter ID ${index + 1}`}
                required
              />
            ))}
            <button
              type="button"
              onClick={handleAddVoterID}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Add Voter ID
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full mt-4"
          >
            Create Poll
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
