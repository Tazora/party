import { addVoteType } from 'meteor/vulcan:voting';

import { makeVoteable } from 'meteor/vulcan:voting';
import Moppeds from './collection.js';

makeVoteable(Moppeds);

addVoteType('upvote', {power: 1, exclusive: true});
addVoteType('downvote', {power: -1, exclusive: true});