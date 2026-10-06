import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import "./App.css";

const initialJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Infosys",
    location: "Bengaluru",
    experience: "0-2 Yrs",
    salary: "Rs. 4.5 - 6.5 LPA",
    type: "Full Time",
    postedDate: "1 day ago",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    shortDescription: "Looking for a Junior Frontend Developer to build clean web applications.",
    fullDescription: "Infosys is hiring Junior Frontend Developers to build modern user interfaces.",
    responsibilities: [
      "Build responsive UI using React",
      "Translate designs into clean code",
      "Integrate backend REST APIs"
    ]
  },
  {
    id: 2,
    title: "React Developer",
    company: "TCS",
    location: "Pune",
    experience: "1-3 Yrs",
    salary: "Rs. 5.0 - 7.5 LPA",
    type: "Full Time",
    postedDate: "2 days ago",
    skills: ["React", "Redux", "JavaScript", "REST API"],
    shortDescription: "Build dynamic web portals and state-managed UI components using React.",
    fullDescription: "TCS is seeking a React Developer to work on client-facing web applications.",
    responsibilities: [
      "Develop reusable React components",
      "Manage application state with Redux",
      "Ensure cross-browser compatibility"
    ]
  },
  {
    id: 3,
    title: "Java Developer",
    company: "Wipro",
    location: "Hyderabad",
    experience: "0-2 Yrs",
    salary: "Rs. 4.0 - 6.0 LPA",
    type: "Full Time",
    postedDate: "3 days ago",
    skills: ["Java", "Spring Boot", "MySQL", "Git"],
    shortDescription: "Entry-level position for building Spring Boot backend services and APIs.",
    fullDescription: "Wipro is hiring Java Developers for enterprise application development.",
    responsibilities: [
      "Develop Spring Boot REST APIs",
      "Write SQL database queries",
      "Fix bugs and write unit tests"
    ]
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Swiggy",
    location: "Bengaluru",
    experience: "1-3 Yrs",
    salary: "Rs. 6.0 - 9.0 LPA",
    type: "Full Time",
    postedDate: "Just now",
    skills: ["Figma", "UI Design", "Wireframing"],
    shortDescription: "Design intuitive interfaces and mobile-friendly layouts for web apps.",
    fullDescription: "Swiggy is looking for a creative UI/UX designer to craft great user experiences.",
    responsibilities: [
      "Create wireframes and prototypes in Figma",
      "Design clean and accessible web screens",
      "Work with developers on UI implementation"
    ]
  },
  {
    id: 5,
    title: "Python Developer",
    company: "Zomato",
    location: "Gurugram",
    experience: "1-3 Yrs",
    salary: "Rs. 6.5 - 9.5 LPA",
    type: "Full Time",
    postedDate: "4 days ago",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    shortDescription: "Develop backend APIs and handle database logic using Python and Django.",
    fullDescription: "Zomato is seeking a Python Developer for backend web service development.",
    responsibilities: [
      "Build RESTful APIs with Django",
      "Manage PostgreSQL databases",
      "Maintain application performance"
    ]
  }
];

function App() {
  const [jobs] = useState(initialJobs);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = (key, loc) => {
    setKeyword(key);
    setLocation(loc);
    setSelectedJob(null);
  };

  const handleReset = () => {
    setKeyword("");
    setLocation("");
    setSelectedJob(null);
  };

  const filteredJobs = jobs.filter((job) => {
    const k = keyword.toLowerCase().trim();
    const l = location.toLowerCase().trim();
    const matchKeyword = !k || job.title.toLowerCase().includes(k) || job.company.toLowerCase().includes(k) || job.skills.some((s) => s.toLowerCase().includes(k));
    const matchLocation = !l || job.location.toLowerCase().includes(l);
    return matchKeyword && matchLocation;
  });

  return (
    <div className="app">
      <Navbar onNavigateHome={handleReset} />
      <main className="main-content">
        {selectedJob ? (
          <JobDetails job={selectedJob} onBack={() => setSelectedJob(null)} />
        ) : (
          <>
            <SearchBar onSearch={handleSearch} onReset={handleReset} />
            <JobList jobs={filteredJobs} onSelectJob={(job) => { setSelectedJob(job); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
          </>
        )}
      </main>
      <footer className="footer">
        <p>&copy; 2026 JobFinder (Sayali Padole)</p>
      </footer>
    </div>
  );
}

export default App;
