import React from 'react';
import QuestList from './QuestList';

function BulletinBoard() {
  return (
    <div>
      <style jsx>{`
        background: darkolivegreen;

      `}</style>
      <h3>BULLETIN BOARD</h3>
      <p>This is the quest bulletin!  You get things for completing the things.  Complete all the things!</p>
      <div className='quests'>
        <QuestList />
      </div>
    </div>
  );
}

export default BulletinBoard;
