import { Link } from "../navigation";

function NotFoundPage() {
  return (
    <section className="hero not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="hero-tagline">
        That URL is not part of this site. Head back home to view my profile.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
