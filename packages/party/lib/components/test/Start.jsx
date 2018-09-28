import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import Moppeds from '../../modules/collection.js';

const Start = () => (
    <div>
        <Components.MoppedsUsers />
        <Components.SmartForm collection={Moppeds} />
        <Components.MoppedsList />
        {/* <Components.Datatable collection={Moppeds} columns={['title', 'artist', 'votes']} /> */}
    </div>
)

registerComponent({ name: 'Start', component: Start });
