// src/components/JobList.js
import React, { useEffect, useState } from 'react';
import JoblyApi from '../api';  // Ensure the API utility is imported correctly
import './JobList.css';  // Import custom styles for the Job List

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
      setIsLoading(false);
    }
    getJobs();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        {jobs.map(job => (
          <div key={job.id} className="col-md-12 job-card mb-4">
            <div className="card border-0 shadow-sm p-4">
              <h4 className="job-title">{job.title}</h4>
              <h6 className="company-name text-muted">{job.companyName}</h6>
              <p className="location text-muted">{job.location}</p>
              <p className="salary text-primary">
                {job.salary ? `$${job.salary}` : "Salary not provided"}
              </p>
              <p className="job-description">{job.description}</p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
