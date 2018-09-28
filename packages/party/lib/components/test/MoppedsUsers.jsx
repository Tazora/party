
import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';

// Uncomment contents on #Step13:
const MoppedsUsers = ({ currentUser }) => (
  <div className="Moppeds-users"> 
    <div>
      {currentUser && <p>Welcome, {currentUser.displayName} {currentUser.isAdmin && `(admin)`}</p>}
      <Components.AccountsLoginForm redirect={false} /> 
    </div>
  </div>
);

registerComponent({ name: 'MoppedsUsers', component: MoppedsUsers, hocs: [withCurrentUser] });
