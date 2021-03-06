Package.describe({
  name: 'party',
});

Package.onUse(function (api) {

  api.use([

    // SASS/SCSS support
    'fourseven:scss@4.5.0',

    // vulcan core
    'vulcan:core@1.12.8',

    // vulcan packages
    'vulcan:forms@1.12.8',
    'vulcan:accounts@1.12.8',
    'vulcan:ui-bootstrap@1.12.8',
    'vulcan:voting@1.12.8',
    
  ]);

  api.addFiles('lib/stylesheets/style.scss');
  
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
