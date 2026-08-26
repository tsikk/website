import { useState } from "react";
import { Link } from "../navigation";
import profile from "../data/profile";

const navItems = [
  { to: "/#about", label: "About", hash: true },
  { to: "/#experience", label: "Experience", hash: true },
  { to: "/#skills", label: "Skills", hash: true },
  { to: "/resume", label: "Resume", hash: false },
];

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              {profile.shortName}
            </span>
            <span className="brand-text">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-title">{profile.title}</span>
            </span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="menu-bars" aria-hidden="true" />
          </button>
          <nav id="site-nav" className={`site-nav${menuOpen ? " is-open" : ""}`}>
            {navItems.map((item) =>
              item.hash ? (
                <a key={item.label} href={item.to} onClick={closeMenu}>
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "is-active" : undefined)}
                >
                  {item.label}
                </Link>
              )
            )}
            <a className="nav-resume" href={profile.resumePdf} onClick={closeMenu}>
              PDF
            </a>
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p>
            {profile.name} · {profile.location}
          </p>
          <p className="footer-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.resumePdf}>Resume PDF</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
