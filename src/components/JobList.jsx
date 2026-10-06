import JobCard from "./JobCard";
function JobList({ jobs, onSelectJob }) {
  if (jobs.length === 0) {
    return (
      <div className="empty-results">
        <h3>No jobs found</h3>
        <p>Try clearing filters or search another title, skill, or city.</p>
      </div>
    );
  }

  return (
    <div className="job-list-container">
      <div className="results-header">
        <h2>Available Job Openings</h2>
        <span className="results-count">{jobs.length} jobs found</span>
      </div>

      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onSelectJob={onSelectJob} />
        ))}
      </div>
    </div>
  );
}
export default JobList;
