import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

const StudentRegistrationForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Graduation Year:', graduationYear);
  };

  return (
    <div className="student-registration-form"> 
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <DatePicker
            id="dateOfBirth"
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
            placeholderText="Select Date of Birth"
          />
        </div>
        <div>
          <label>Graduation Year:</label>
          <div>
            <label>
              <input
                type="radio"
                value="2023"
                checked={graduationYear === '2023'}
                onChange={(e) => setGraduationYear(e.target.value)}
              />{' '}
              2023
            </label>
            <label>
              <input
                type="radio"
                value="2024"
                checked={graduationYear === '2024'}
                onChange={(e) => setGraduationYear(e.target.value)}
              />{' '}
              2024
            </label>
            <label>
              <input
                type="radio"
                value="2025"
                checked={graduationYear === '2025'}
                onChange={(e) => setGraduationYear(e.target.value)}
              />{' '}
              2025
            </label>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
