import React, { useState } from 'react';

const distribution = {
  A: 90,
  B: 80,
  C: 70,
  D: 60,
  F: 0
};

const Grade = () => {
  const [score, setScore] = useState('');
  
  
  const [result, setResult] = useState('');
  
  
  
  const getGrade = (score, distribution) => {
    const grades = Object.keys(distribution);
    grades.sort((a, b) => distribution[b] - distribution[a]);

    const grade = grades.find(grade => distribution[grade] <= score);

    if (grade === grades[grades.length - 1]) {
      return grade;
    } else if (score - distribution[grade] <= 2) {
      return grade + '-'; // Change: Concatenate without modifying grade directly
    } else if (score - distribution[grade] >= 8) {
      return grade + '+'; // Change: Concatenate without modifying grade directly
    } else {
      return grade;
    }
  };

  const calculateGrade = () => {
    const scoreValue = parseFloat(score);

    if (isNaN(scoreValue) || scoreValue < 0 || scoreValue > 100) {
      setResult('Invalid score. Please enter a score between 0 and 100.');
    } else {
      const grade = getGrade(scoreValue, distribution);
      setResult(`Your grade is: ${grade}`);
    }
  };

  return (
    <div>
      <h1>Grade Calculator</h1>
      <label htmlFor="score">Enter your score (between 0 and 100):</label>
      <input
        type="number"
        id="score"
        min="0"
        max="100"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={calculateGrade}>Calculate Grade</button>
      <p>{result}</p>
    </div>
  );
};

export default Grade;
