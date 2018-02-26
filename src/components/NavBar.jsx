import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const link={
    textDecoration: 'none',
    color: 'black',
    margin: '20px'
  };

  return (
    <div>
      <style jsx>{`
        padding: 20px 15px 20px;

        a:hover{
          color: darkred;
        }
      `}</style>
    <Link style={link} to='/QuestList'><a>Quests</a></Link>
      <Link style={link} to='/NewQuest'><a>Add a Quest</a></Link>
    </div>
  );
}

export default NavBar;
