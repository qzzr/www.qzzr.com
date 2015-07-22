
mixpanel.track('Viewed page', {
  'Page' : document.title,
  'Domain' : window.location.hostname,
  'Path' : window.location.pathname,
  'URL' : window.location.href
});

function socialNetwork(referrer) {
  if (referrer.search('https?://(.*)facebook.([^/?]*)') === 0 ) return 'Facebook';
  if (referrer.search('https?://(.*)fb.me.([^/?]*)') === 0) return 'Facebook';
  if (referrer.search('https?://(.*)qzone.qq.([^/?]*)') === 0) return 'Qzone';
  if (referrer.search('https?://(.*)habbo.([^/?]*)') === 0) return 'Habbo';
  if (referrer.search('https?://(.*)twitter.([^/?]*)') === 0) return 'Twitter';
  if (referrer.search('https?://t.co([^/?]*)') === 0) return 'Twitter';
  if (referrer.search('https?://(.*)instagram.([^/?]*)') === 0) return 'Instagram';
  if (referrer.search('https?://(.*)youtube.([^/?]*)') === 0) return 'Youtube';
  if (referrer.search('https?://(.*)youtu.be([^/?]*)') === 0) return 'Youtube';
  if (referrer.search('https?://(.*)vimeo.([^/?]*)') === 0) return 'Vimeo';
  if (referrer.search('https?://(.*)linkedin.([^/?]*)') === 0) return 'LinkedIn';
  if (referrer.search('https?://(.*)orkut.([^/?]*)') === 0) return 'Orkut';
  if (referrer.search('https?://(.*)github.([^/?]*)') === 0) return 'GitHub';
  if (referrer.search('https?://(.*)referer.google.([^/?]*)') === 0) return 'GooglePlus';
  if (referrer.search('https?://(.*)plus.google.([^/?]*)') === 0) return 'GooglePlus';
  if (referrer.search('https?://(.*)flickr.([^/?]*)') === 0) return 'Flickr';
  if (referrer.search('https?://(.*)stackoverflow.([^/?]*)') === 0) return 'StackOverflow';
  if (referrer.search('https?://(.*)pinterest.([^/?]*)') === 0) return 'Pinterest';
  if (referrer.search('https?://(.*)tumblr.([^/?]*)') === 0) return 'Tumblr'; 
  if (referrer.search('https?://(.*)stumbleupon.([^/?]*)') === 0) return 'StumbleUpon';
  if (referrer.search('https?://(.*)foursquare.([^/?]*)') === 0) return 'Foursquare';
  if (referrer.search('https?://(.*)reddit.([^/?]*)') === 0) return 'Reddit';
  if (referrer.search('https?://(.*)delicious.([^/?]*)') === 0) return 'Delicious';
  return false;
}

// if there is no utm_source set in the url
if (document.location.search && document.location.search.search('utm_source') === -1) {
  // see if referrer is a social network
  var socialNetwork = socialNetwork(document.referrer)

  // if referrer is one of our social domains set social properties
  if (socialNetwork){
    mixpanel.register_once({"utm_medium": 'Organic Social'});
    mixpanel.register_once({"Social Network": socialNetwork});
    mixpanel.register_once({"utm_source": socialNetwork});
  } 
}
