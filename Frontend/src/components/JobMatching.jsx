import React, { useState, useEffect } from 'react';
import { matchJobs } from '../utils/jobMatchingAlgorithm'; // Import the job matching algorithm

const JobMatching = ({ userProfile, jobsList }) => {
  const [matchedJobs, setMatchedJobs] = useState([]);

  useEffect(() => {
    // Match jobs when the component mounts
    const matches = matchJobs(userProfile, jobsList);
    setMatchedJobs(matches);
  }, [userProfile, jobsList]);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Matched Jobs</h2>
      <ul className="mt-5 space-y-4">
        {matchedJobs.map((job, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p>Skills: {job.skills.join(', ')}</p>
            <p>Required Experience: {job.requiredExperience} years</p>
            <p>Location: {job.location}</p>
            <p>Match Score: {job.matchScore}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobMatching;
