import { Components, registerComponent, withMessages, withCurrentUser } from 'meteor/vulcan:core';
import React, { PureComponent } from 'react';
import { withVote } from 'meteor/vulcan:voting';

class MoppedsItem extends PureComponent {

  constructor() {
    super();
    this.upvote = this.upvote.bind(this);
  }

  upvote(e) {
    e.preventDefault();

    const document = this.props.document;
    const collection = this.props.collection;
    const user = this.props.currentUser;

    if(!user){
      this.props.flash('Please log in first!');
    } else {
      this.props.vote({document, voteType: 'upvote', collection, currentUser: this.props.currentUser});
      console.log("Erfolgreicher Vote")
    } 
  }

  render() {
    return (
      <div>
        <a className="upvote-button" onClick={this.upvote}>
        <button><div className="vote-count">{this.props.document.baseScore || 0}</div></button>
          
        </a>
      </div>
    )
  }

}

registerComponent('MoppedsItem', MoppedsItem, withMessages, withVote, withCurrentUser);