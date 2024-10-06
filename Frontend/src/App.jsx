import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from './components/admin/AdminJobs';
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';
import ProtectedRoute from './components/admin/ProtectedRoute';
import ResumeBuilder from './components/ResumeBuilder';  // <-- Import ResumeBuilder
import JobMatching from './components/JobMatching'; // <-- Import JobMatching

// Example user and job data
const userProfile = {
  skills: ['JavaScript', 'React', 'Node.js'],
  experience: 3,
  location: 'New York'
};

const jobsList = [
  { title: 'Frontend Developer', skills: ['JavaScript', 'React'], requiredExperience: 2, location: 'New York' },
  { title: 'Backend Developer', skills: ['Node.js', 'Express'], requiredExperience: 3, location: 'San Francisco' },
];

// Define the router
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/jobs',
    element: <Jobs />,
  },
  {
    path: '/description/:id',
    element: <JobDescription />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  // Admin routes start here
  {
    path: '/admin/companies',
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/companies/create',
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/companies/:id',
    element: (
      <ProtectedRoute>
        <CompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/jobs',
    element: (
      <ProtectedRoute>
        <AdminJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/jobs/create',
    element: (
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/jobs/:id/applicants',
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    ),
  },
  // Add the ResumeBuilder route here
  {
    path: '/resume-builder', // <-- New route for ResumeBuilder
    element: <ResumeBuilder />,
  },
  // Add Job Matching route here
  {
    path: '/job-matching', // <-- New route for JobMatching
    element: <JobMatching userProfile={userProfile} jobsList={jobsList} />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
