const schema = {

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },

  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => {
      return new Date();
    }
  },

  userId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    /*

    Uncomment on #Step12:

    */
    // resolveAs: {
    //   fieldName: 'user',
    //   type: 'User',
    //   resolver: async (movie, args, context) => {
    //     return await context.Users.loader.load(movie.userId);
    //   },
    //   addOriginalField: true,
    // },
  },

  title: {
    label: 'Titel',
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    searchable: true,
  },

  artist: {
    label: 'Künstler',
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    searchable: true,
  },

};

export default schema;
