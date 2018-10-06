import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment MoppedsList on Mopped {

    # Moppeds
    _id
    title
    artist

    # users
    userId

    # voting
    currentUserVotes{
      ...VoteFragment
    }
    baseScore
    score
  }
`);