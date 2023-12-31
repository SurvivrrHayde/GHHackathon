import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Homepage() {
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
                className="nav-link fw-bold py-1 px-0 active"
                aria-current="page"
                href="/"
              >
                Home
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="/aboutUs">
                About Us
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="/translator">
                Translator
              </a>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <h1>Welcome.</h1>
          <p className="lead">
          Revolutionizing the way we communicate, our cutting-edge app employs state-of-the-art machine learning image classification to instantaneously transform American Sign Language (ASL) into text, fostering seamless understanding between Deaf and hearing individuals.
          </p>
          <p className="lead">
            <a
              href="/translator"
              className="btn btn-lg btn-light fw-bold border-white bg-white"
            >
              Translate
            </a>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>
            Created by Matthew Haid, Helen Yao, and Sarah Warren for Girls Who
            Code Hackathon Fall 2023
          </p>
        </footer>
      </div>
      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Homepage;
