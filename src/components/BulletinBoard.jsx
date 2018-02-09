import React from 'react';
import QuestList from './QuestList';

function BulletinBoard() {
  return (
    <div>
      <style jsx>{`
        background: darkolivegreen;
        padding: 60px;
      `}</style>
      <h3>BULLETIN BOARD</h3>
      <QuestList />
    </div>
  );
}

export default BulletinBoard;
