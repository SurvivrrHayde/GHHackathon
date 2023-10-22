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
        <p>
          We are third year Computer Science majors at the University of Virginia.
        </p>
        <h3>Project</h3>
        <p>
          
        </p>
        <h3>Matthew Haid</h3>
        <p>
          Matthew is a an active member in Theta Tau, UVa's Engineering fraternity. Matthew has been the head lab teaching assitant for computer systems and organization 1 for three semesters, 
          and is also a teaching assistant for computer systems and organization 2.
        </p>
        <h3>Helen Yao</h3>
        <p>
          Helen is also an active member of Theta Tau, and a teaching assistant for data structures and algorithms 1 
        </p>
        <h3>Sarah Warren</h3>
        <p>
          Sarah is the head grading teaching assistant for computer systems and organization 1.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
