import React from 'react';
import { Components, registerComponent, withMulti } from 'meteor/vulcan:core';
import Moppeds from '../../modules/collection.js';

const MoppedsList = ({ loading, results }) => (

  <div className="Moppeds-list">
    <div className="Moppeds-contents">
    {loading ? 
      <Components.Loading/> :
      results && <ul>
        {results.map(Mopped => 
          <li key={Mopped.title}>
            <h4>{Mopped.title}</h4>
            {Mopped.artist && <p>{Mopped.artist}</p>}
            {Mopped.user && <p><em>– {Mopped.user.displayName}</em></p>}
            <Components.MoppedsItem document={Mopped} collection={Moppeds} />
          </li>
        )}
      </ul>
    }
    </div>
  </div>
);

const options = {
  collection: Moppeds,
  fragmentName: 'MoppedsList', // uncomment on #Step11
}

registerComponent({ name: 'MoppedsList', component: MoppedsList, hocs: [ [withMulti, options] ] }); // uncomment on #Step10
