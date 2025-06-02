import { Link } from "react-router-dom";
import "../css/index.css";

function NotFound() {
  return (
    <section className="notfound-container">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/" className="home-link">Go back to Home</Link>
    </section>
  );
}

export default NotFound;
