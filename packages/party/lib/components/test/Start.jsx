import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const Start = () => (
    <div>
        <p>Test</p>
    </div>
)

registerComponent({ name: 'Start', component: Start });
