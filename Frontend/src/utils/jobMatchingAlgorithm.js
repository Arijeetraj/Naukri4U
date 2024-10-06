// jobMatchingAlgorithm.js
export const matchJobs = (userProfile, jobsList) => {
    return jobsList.map(job => {
      let score = 0;
  
      // Match skills
      const matchingSkills = job.skills.filter(skill => userProfile.skills.includes(skill));
      score += matchingSkills.length * 2; // weight for skills
  
      // Match experience (assumes experience in years)
      if (userProfile.experience >= job.requiredExperience) {
        score += 5; // experience match
      }
  
      // Match location
      if (userProfile.location === job.location) {
        score += 3; // location match
      }
  
      // Return job with matching score
      return {
        ...job,
        matchScore: score
      };
    }).sort((a, b) => b.matchScore - a.matchScore); // sort by best match
  };
    