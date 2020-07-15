var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'b64b3de7933448399b98f968a78aa23d',
  secret: 'f08e89ddd3744eb38b8b49cda407897f'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
var url=data.tracks.href;
console.log(url); 

spotify
  .request(url)
  .then(function(data) {
    console.log(data.tracks.items[0].external_urls.spotify); 
    for(var i=0; i<data.tracks.items.legnth; i++){
        console.log(data.tracks.items[i]);
    }
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
});