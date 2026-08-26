import profile from "../data/profile";

function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-toolbar no-print">
        <p>A formatted copy of my resume. Use Print if you want a PDF.</p>
        <div className="hero-actions">
          <button className="button button-primary" type="button" onClick={() => window.print()}>
            Print
          </button>
        </div>
      </div>

      <article className="resume-sheet" aria-label="Resume">
        <header className="resume-header">
          <div>
            <h1>{profile.name}</h1>
            <p className="resume-role">{profile.title}</p>
          </div>
          <ul className="resume-contacts">
            <li>{profile.location}</li>
            <li>
              <a href={profile.website}>{profile.website.replace(/^https:\/\//, "")}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </header>

        <section>
          <h2>Profile</h2>
          <p>{profile.summary}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {profile.experience.map((job) => (
            <div key={`${job.role}-${job.dates}`} className="resume-job">
              <div className="resume-job-heading">
                <h3>
                  {job.role} <span className="resume-company">{job.company}</span>
                </h3>
                <p className="resume-dates">{job.dates}</p>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <p className="resume-skills">{profile.competencies.join(" · ")}</p>
          {profile.skillGroups.map((group) => (
            <p key={group.title} className="resume-skill-line">
              <strong>{group.title}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {profile.education.map((item) => (
            <div key={item.school} className="resume-job-heading">
              <h3>
                {item.credential} <span className="resume-company">{item.school}</span>
              </h3>
              <p className="resume-dates">{item.dates}</p>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}

export default ResumePage;
