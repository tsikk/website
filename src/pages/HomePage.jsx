import { useEffect } from "react";
import { Link } from "../navigation";
import profile from "../data/profile";

function HomePage() {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) {
      return undefined;
    }
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <section className="hero">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/resume">
            View resume
          </Link>
          <a className="button button-secondary" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Infrastructure, then platforms</h2>
        </div>
        <div className="about-grid">
          <div className="prose">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="contact-card">
            <h3>Contact</h3>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    Trent Sikkema
                  </a>
                </dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    github.com/tsikk
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Selected roles</h2>
        </div>
        <ol className="timeline">
          {profile.experience.map((job) => (
            <li key={`${job.role}-${job.dates}`} className="timeline-item">
              <div className="timeline-meta">
                <p className="timeline-dates">{job.dates}</p>
                <p className="timeline-company">{job.company}</p>
              </div>
              <div className="timeline-body">
                <h3>{job.role}</h3>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>How I work</h2>
        </div>
        <ul className="competency-list">
          {profile.competencies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="skill-grid">
          {profile.skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Background</h2>
        </div>
        {profile.education.map((item) => (
          <article key={item.school} className="education-card">
            <h3>{item.school}</h3>
            <p>{item.credential}</p>
            <p className="muted">{item.dates}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default HomePage;
