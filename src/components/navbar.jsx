import * as React from 'react';


const NavBar = ({totalCounters}) => {
  console.log('NavBar - Rendered');
  return (<nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
            </span>
        </a>
      </div>
    </nav>);
}



export default NavBar;