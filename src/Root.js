import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1>Aplikacja testowa</h1>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/oferta/123">Oferta</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
