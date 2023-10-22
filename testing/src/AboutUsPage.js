import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function AboutUsPage() {
  return (
    <div
      className="d-flex text-center text-bg-dark"
      style={{ height: "100vh" }}
    >
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">ASL Translator</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a
                className="nav-link fw-bold py-1 px-0"
                href="/"
              >
                Home
              </a>
              <a className="nav-link fw-bold py-1 px-0 active" href="/aboutUs" aria-current="page">
                About Us
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="/translator">
                Translator
              </a>
            </nav>
          </div>
        </header>
        <p>AboutUsPage</p>
      </div>
    </div>
  );
}

export default AboutUsPage;
