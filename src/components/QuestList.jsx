import React from 'react';
import Quest from './Quest';

const masterQuestList = [
  {
    title: 'Wander into Wonderland',
    giver: 'Eliza',
    description: 'Feed [Chocolate] to Flanders',
    reward: '[Kitchen Knife]'
  },
  {
    title: 'Come Fly With Me',
    giver: 'Alice',
    description: 'Find the [Carriage Pass]',
    reward: '[Empty Bottle]'
  },
  {
    title: 'Foggy Day',
    giver: 'Phaestus',
    description: 'Find a friend for Phaestus',
    reward: '3 Acorns'
  },
  {
    title: 'Paper Faces on Parade',
    giver: 'Leroux',
    description: 'Catch the Phantom',
    reward: '[Circus Ticket]'
  },
  {
    title: 'Mock Oranges',
    giver: 'Quixote',
    description: 'Disable the windmill',
    reward: '2 Comfits'
  },
  {
    title: 'Bread and Circuses',
    giver: 'Maddy',
    description: 'Uncover the mystery of the Big Top',
    reward: '4 Buttons'
  }
];

function QuestList() {
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', maxWidth:'1800px', margin:'auto'}}>
      {masterQuestList.map((quest, index) =>
        <Quest title={quest.title}
          giver={quest.giver}
          description={quest.description}
          reward={quest.reward}
          key={index}/>
      )}
    </div>
  );
}

export default QuestList;
