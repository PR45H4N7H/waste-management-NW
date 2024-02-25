import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div>
      <section>
        <nav>
          <ul className="menuItems">
            <li><a href='mHome' data-item='Home'>Home</a></li>
            <li><a href='stats' data-item='Statistics'>Statistics</a></li>
            <li><a href='emp' data-item='Employees'>Employees</a></li>
            <li><a href='https://nwmissouri.edu/services/sustainability/recycle.htm' data-item='Blog'>Blog</a></li>
            <li className="logout"><a href='SignUp' data-item='LogOut'>LogOut</a></li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
