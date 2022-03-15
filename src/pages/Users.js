import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <Link
            to="#"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <span className="fs-4">Testing Example</span>
          </Link>
        </div>
      </header>
    </>
  );
}

function Content() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });

  return (
    <>
      <Link to={"/"} className="btn btn-secondary mb-3">
        Back to Home
      </Link>

      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
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

function Users() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Users;
