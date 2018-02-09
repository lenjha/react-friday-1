import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Header() {
  const link={
    textDecoration:'none',
    color: 'white'
  };
  return (
    <div>
      <style jsx>{`
        background: #563f37;
        color: lightyellow;
        width: 100%;
        margin: 0;
        padding: 10px 0;

        h1{
          text-align: center;
        }
        a:hover{
          color: tan;
        }

      `}</style>
      <h1>
        <Link style={link} to='/'><a>Once upon a time...</a></Link>
      </h1>
      <NavBar />
    </div>
  );
}

export default Header;
