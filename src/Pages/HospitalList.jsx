import React, { useState } from 'react';
import axios from 'axios';
import './HospitalList.css';

function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [pincode, setPincode] = useState('');

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleSearch = async () => {
    const response = await axios.get(`/hospitals?pincode=${pincode}`);
    setHospitals(response.data);
  };

  return (
    <div>
      <h1>Hospital List</h1>
      <div>
        <label htmlFor="pincode">Enter Pincode:</label>
        <input
          type="text"
          id="pincode"
          value={pincode}
          onChange={handlePincodeChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            &nbsp; 
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital) => (
            <tr key={hospital.id}>
              <td>{hospital.name}</td>
              <td>{hospital.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HospitalList;
