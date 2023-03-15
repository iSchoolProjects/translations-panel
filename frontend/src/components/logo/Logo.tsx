import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      <img className="logo-light logo-img" src="https://itmedia.io/wp-content/uploads/2020/12/logo-1.png" alt="logo" />
      <img className="logo-dark logo-img" src="https://itmedia.io/wp-content/uploads/2020/12/logo-1.png" alt="logo" />
    </Link>
  );
};

export default Logo;
