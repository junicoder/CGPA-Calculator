// Mapping of letter grades to grade points
const gradePointMap = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    // Add more grades as needed
  };
  
  function calculateCGPA() {
    const subjects = document.querySelectorAll('.subject');
    let totalCredits = 0;
    let totalGradePoints = 0;
  
    subjects.forEach(subject => {
      const creditHours = parseFloat(subject.querySelector('.credit-hours').value);
      const grade = subject.querySelector('.grade').value.toUpperCase(); // Convert grade to uppercase
  
      if (!isNaN(creditHours) && gradePointMap.hasOwnProperty(grade)) {
        totalCredits += creditHours;
        totalGradePoints += creditHours * gradePointMap[grade];
      }
    });
  
    if (totalCredits > 0) {
      const cgpa = totalGradePoints / totalCredits;
      document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
    } else {
      document.getElementById('result').innerText = 'Please enter valid credit hours and grades.';
    }
  }
  
  function addSubject() {
    const subjectsContainer = document.getElementById('subjects-container');
    const newSubject = document.createElement('div');
    newSubject.classList.add('subject');
    newSubject.innerHTML = `
      <label>Credit Hours:</label>
      <input type="number" class="credit-hours" step="0.5" min="0.5" required>
      <label>Grade:</label>
      <select class="grade" required>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <!-- Add more grade options as needed -->
      </select>
    `;
    subjectsContainer.appendChild(newSubject);
  }
  
  // Add subject when the "Add Subject" button is clicked
  document.getElementById('addSubjectBtn').addEventListener('click', addSubject);
  