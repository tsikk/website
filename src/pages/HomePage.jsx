import { useEffect } from "react";
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
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="button button-secondary"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
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
            <p className="contact-note">The best way to reach me is LinkedIn.</p>
            <dl>
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
    </>
  );
}

export default HomePage;
