import { useState } from "react";
function JobDetails({ job, onBack }) {
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmitApplication = (e) => {
    e.preventDefault();
    if (applicantName.trim() && applicantEmail.trim() && applicantPhone.trim()) {
      setIsSubmitted(true);
    }
  };

  const handleResetApplication = () => {
    setApplicantName("");
    setApplicantEmail("");
    setApplicantPhone("");
    setIsSubmitted(false);
    setShowForm(false);
  };

  return (
    <div className="job-details-container">
      <button onClick={onBack} className="back-btn">
        &larr; Back
      </button>

      <div className="details-card">
        <div className="details-header">
          <div>
            <h1 className="details-title">{job.title}</h1>
            <p className="details-company">{job.company}</p>
          </div>
          <span className="job-type-badge">{job.type}</span>
        </div>

        <div className="details-grid">
          <div className="grid-item">
            <span className="grid-label">Location:</span>
            <span className="grid-value">📍{job.location}</span>
          </div>
          <div className="grid-item">
            <span className="grid-label">Experience:</span>
            <span className="grid-value">💼 {job.experience}</span>
          </div>
          <div className="grid-item">
            <span className="grid-label">Salary:</span>
            <span className="grid-value">💰 {job.salary}</span>
          </div>
          <div className="grid-item">
            <span className="grid-label">Posted Date:</span>
            <span className="grid-value">📅 {job.postedDate}</span>
          </div>
        </div>

        <div className="details-section">
          <h3>Key Skills Required</h3>
          <div className="job-skills-list">
            {job.skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>

        <div className="details-section">
          <h3>About the Job</h3>
          <p>{job.fullDescription}</p>
        </div>

        <div className="details-section">
          <h3>Roles & Responsibilities</h3>
          <ul className="responsibilities-list">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {!showForm && !isSubmitted && (
          <div className="apply-action-box">
            <button onClick={() => setShowForm(true)} className="apply-btn">
              Apply Now
            </button>
          </div>
        )}

        {showForm && !isSubmitted && (
          <div className="application-form-box">
            <h3>Apply for {job.title}</h3>
            <p className="form-subtitle">Fill your basic details to submit your application</p>

            <form onSubmit={handleSubmitApplication} className="application-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Abc"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. abc@gmail.com"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 1234567890"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-button-group">
                <button type="submit" className="submit-application-btn">
                  Submit Application
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {isSubmitted && (
          <div className="success-box">
            <div className="success-icon">✓</div>
            <h3>Application Submitted Successfully!</h3>
            <p>
              Thank you, <strong>{applicantName}</strong>! Your application for the position of{" "}
              <strong>{job.title}</strong> at <strong>{job.company}</strong> has been submitted.
            </p>
            <p className="success-contact-note">
              We have sent a confirmation to <strong>{applicantEmail}</strong> and our hiring team will reach you on <strong>{applicantPhone}</strong>.
            </p>
            <div className="success-actions">
              <button onClick={handleResetApplication} className="reset-application-btn">
                Apply for Another Position
              </button>
              <button onClick={onBack} className="back-home-btn">
                Back to All Jobs
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default JobDetails;
