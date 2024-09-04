import React, { useEffect, useState } from 'react';
import JoblyApi from '../api'; // Assuming api.js is one level up

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCompanies() {
      try {
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getCompanies();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h1>Companies</h1>
      <ul className="list-group">
        {companies.map(c => (
          <li key={c.handle} className="list-group-item">
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;
