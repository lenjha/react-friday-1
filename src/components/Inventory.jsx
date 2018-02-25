import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const link={
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div>
      <style jsx>{`
        padding: 20px 15px 20px;

        a:hover{
          color: darkred;
        }
      `}</style>
    <h1>Inventory Works!</h1>
    </div>
  );
}

export default NavBar;
