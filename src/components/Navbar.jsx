function Navbar({ onNavigateHome }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={onNavigateHome}>
          <span className="logo-icon">💼</span>
          <span className="logo-title">JobFinder</span>
        </div>
        <ul className="nav-links">
          <li onClick={onNavigateHome}>Home</li>
          <li onClick={onNavigateHome}>Find Jobs</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
