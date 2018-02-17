import React from 'react';
import Quest from './Quest';
import PropTypes from 'prop-types';

function QuestList(props) {
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', maxWidth:'1800px', margin:'auto'}}>
      {props.questList.map((quest) =>
        <Quest title={quest.title}
          giver={quest.giver}
          description={quest.description}
          location={quest.location}
          key={quest.id}/>
      )}
    </div>
  );
}

QuestList.propTypes = {
  questList: PropTypes.array
};

export default QuestList;
