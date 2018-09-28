import React from 'react';
import { Components, replaceComponent, registerComponent } from 'meteor/vulcan:core';

const Layout = () => (
  <div className="layout">
    <Components.Start />
  </div>
);

replaceComponent('Layout', Layout);