// import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container d-flex flex-wrap justify-content-center">
        {/* <Link
          to="#"
          className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
        >
          <span className="fs-4">Testing Example</span>
        </Link> */}
      </div>
    </header>
  );
}

function Content() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 border">
      <h1 className="display-5 fw-bold">Why do we need Test ?</h1>
      <p className="col-md-8 fs-4">
        Using a series of utilities, you can create this jumbotron, just like
        the one in previous version of Bootstrap. Check out the example below
        for how you can remix and restyle it in to liking.
      </p>

      <a
        href="/users"
        type="button"
        role="button"
        className="btn btn-primary btn-lg"
      >
        Users List
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="text-muted py-3 border-top">
      <div className="container">
        <p className="mb-1">&copy; 2022</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
