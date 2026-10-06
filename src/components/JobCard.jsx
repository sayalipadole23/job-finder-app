function JobCard({ job, onSelectJob }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div>
          <h3 className="job-title">{job.title}</h3>
          <span className="job-company">{job.company}</span>
        </div>
        <span className="job-type-badge">{job.type}</span>
      </div>

      <div className="job-meta">
        <div className="meta-item">
          <span className="meta-icon">💼</span>
          <span>{job.experience}</span>
        </div>
        <div className="meta-item">
          <span className="meta-icon">💰</span>
          <span>{job.salary}</span>
        </div>
        <div className="meta-item">
          <span className="meta-icon">📍</span>
          <span>{job.location}</span>
        </div>
      </div>

      <p className="job-description-short">{job.shortDescription}</p>

      <div className="job-skills-list">
        {job.skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>

      <div className="job-card-footer">
        <span className="posted-text">Posted: {job.postedDate}</span>
        <button onClick={() => onSelectJob(job)} className="view-details-btn">
          View Details
        </button>
      </div>
    </div>
  );
}

export default JobCard;
