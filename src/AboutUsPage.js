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
        <header style={{ marginBottom: "100px" }}>
          <div>
            <h3 className="float-md-start mb-0">ASL Translator</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link fw-bold py-1 px-0" href="/">
                Home
              </a>
              <a
                className="nav-link fw-bold py-1 px-0 active"
                href="/aboutUs"
                aria-current="page"
              >
                About Us
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="/translator">
                Translator
              </a>
            </nav>
          </div>
        </header>

        <main className="px-3" style={{ textAlign: "center" }}>
          <h1>Motivation</h1>
          <p className="lead">
            The motivation behind our project,
            stems from a deep-seated commitment to inclusivity and breaking down
            communication barriers. In a world that thrives on diverse
            interactions, it's essential to recognize the critical need for
            bridging the gap between Deaf and hearing communities. American Sign
            Language (ASL) is a beautiful, expressive language, yet its
            understanding is often limited to those who have learned it.
          </p>
        </main>
        <div style={{ display: "flex", width: "90vw", marginLeft: "-21vw" }}>
          <div style={{ width: "25vw" }}>
            <h3>Matthew Haid</h3>
            <p className="lead">
              Matthew Haid is an aspiring graduate student with a keen focus on
              Machine Learning, actively contributing to his academic journey.
              He also plays a significant role within the UVA community as an
              active member of Theta Tau, the coed engineering fraternity.
              Currently serving as the Head TA for Computer Systems and
              Organization 1, his dedication to both academics and
              extracurriculars reflects a strong commitment to the field of
              computer science and his leadership within it.
            </p>
          </div>
          <div style={{ width: "25vw" }}>
            <h3>Sarah Warren</h3>
            <p className="lead">
              Sarah Warren is a driven individual with a clear career goal of
              becoming a software engineer, and her current role as Head TA for
              Computer Systems and Organization 1 speaks to her dedication to
              the field. Beyond her academic pursuits, she holds the esteemed
              position of Vice President for the SurfRider Foundation at UVA,
              demonstrating her commitment to environmental conservation and
              leadership within her university's community.
            </p>
          </div>

          <div style={{ width: "25vw" }}>
            <h3>Helen Yao</h3>
            <p className="lead">
              Helen Yao is a multifaceted and dedicated student, actively
              participating in UVA's academic landscape as a member of Theta
              Tau, TA for both Intro to Programming and Data Structures and
              Algorithms 1, and offering her expertise as a tutor for the
              engineering school. Her extensive involvement in both educational
              and extracurricular activities showcases her unwavering commitment
              to her academic community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
