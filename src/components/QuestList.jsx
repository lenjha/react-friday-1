import React from 'react';
import Quest from './Quest';

const masterQuestList = [
  {
    title: 'Title 1',
    giver: 'Giver 1',
    description: 'Description 1',
    reward: 'Reward 1'
  },
  {
    title: 'Title 2',
    giver: 'Giver 2',
    description: 'Description 2',
    reward: 'Reward 2'
  },
  {
    title: 'Title 3',
    giver: 'Giver 3',
    description: 'Description 3',
    reward: 'Reward 3'
  },
  {
    title: 'Title 4',
    giver: 'Giver 4',
    description: 'Description 4',
    reward: 'Reward 4'
  },
  {
    title: 'Title 5',
    giver: 'Giver 5',
    description: 'Description 5',
    reward: 'Reward 5'
  },
  {
    title: 'Title 6',
    giver: 'Giver 6',
    description: 'Description 6',
    reward: 'Reward 6'
  },
  {
    title: 'Title 7',
    giver: 'Giver 7',
    description: 'Description 7',
    reward: 'Reward 7'
  },
  {
    title: 'Title 8',
    giver: 'Giver 8',
    description: 'Description 8',
    reward: 'Reward 8'
  },
  {
    title: 'Title 9',
    giver: 'Giver 9',
    description: 'Description 9',
    reward: 'Reward 9'
  },
  {
    title: 'Title 10',
    giver: 'Giver 10',
    description: 'Description 10',
    reward: 'Reward 10'
  }
];

function QuestList() {
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', maxWidth:'2000px', margin:'auto'}}>
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
