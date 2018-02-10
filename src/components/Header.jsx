import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Header() {
  const link={
    textDecoration:'none',
    color: 'black'
  };
  return (
    <div>
      <style jsx>{`
          .header-bg{
            background: #dddddd;
            marginL 0;
          }
        width: 100%;

        h1{
          padding: 20px;
          text-align: center;
        }
        a:hover{
          color: darkred;
        }

      `}</style>
      <div className='header-bg'>
        <h1>
          <Link style={link} to='/'><a>Once upon a time...</a></Link>
        </h1>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
