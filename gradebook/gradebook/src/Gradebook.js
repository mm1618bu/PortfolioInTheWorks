import React, { useState, useEffect } from 'react';

const Gradebook = () => {
  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    // Fetch data from an API or initialize with sample data
    // For simplicity, I'm using hardcoded sample data here
    const initialStudents = ['Student1', 'Student2', 'Student3', 'Student4', 'Student5', 'Student6' ];
    const initialAssignments = ['Assignment1', 'Assignment2', 'Assignment3', 'Assignment4', 'Assignment5', 'Assignment6'];
    const initialGrades = Array.from({ length: initialStudents.length }, () =>
      Array(initialAssignments.length).fill(null)
    );

    setStudents(initialStudents);
    setAssignments(initialAssignments);
    setGrades(initialGrades);
  }, []);

  const handleGradeChange = (studentIndex, assignmentIndex, value) => {
    const newGrades = [...grades];
    newGrades[studentIndex][assignmentIndex] = parseInt(value, 10) || 0;
    setGrades(newGrades);
  };

  const calculateAverage = (studentIndex) => {
    const studentGrades = grades[studentIndex];
    const total = studentGrades.reduce((acc, grade) => acc + grade, 0);
    return total / studentGrades.length || 0;
  };

  return (
    <div>
      <h1>Gradebook</h1>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            {assignments.map((assignment, index) => (
              <th key={index}>{assignment}</th>
            ))}
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td>{student}</td>
              {assignments.map((assignment, assignmentIndex) => (
                <td key={assignmentIndex}>
                  <input
                    type="number"
                    value={grades[studentIndex][assignmentIndex]}
                    onChange={(e) =>
                      handleGradeChange(studentIndex, assignmentIndex, e.target.value)
                    }
                  />
                </td>
              ))}
              <td>{calculateAverage(studentIndex)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gradebook;
