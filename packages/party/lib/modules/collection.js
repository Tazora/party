/*

The main Moppeds collection definition file.

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';

let Moppeds;

/*

Moppeds collection definition

Uncomment on #Step6:

*/

Moppeds = createCollection({

  collectionName: 'Moppeds',

  typeName: 'Mopped',

  schema,
  
  resolvers: getDefaultResolvers('Moppeds'), // Uncomment on #Step9

  mutations: getDefaultMutations('Moppeds'), // Uncomment on #Step14

});

export default Moppeds;