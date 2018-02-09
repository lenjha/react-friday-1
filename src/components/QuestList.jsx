import React from 'react';
import Quest from './Quest';

const masterQuestList = [
  {
    title: 'A Simple Fetch Quest',
    giver: 'Pingstun Martholow',
    description: 'Retrieve a stick for Pingstun Martholow',
    reward: 'Aesilian Tonic'
  }
]

function QuestList() {
  return (
    <div>
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
