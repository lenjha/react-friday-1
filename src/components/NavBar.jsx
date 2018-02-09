import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const link={
    textDecoration: 'none',
    color: 'white'
  };

  return (
    <div>
      <style jsx>{`
        color: lightyellow;
        padding: 20px 15px 0;

        a:hover{
          color: tan;
        }
      `}</style>
      <Link style={link} to='/BulletinBoard'><a>Quests</a></Link>
    </div>
  );
}

export default NavBar;
