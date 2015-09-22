(function($) {
	"use strict";
	
	$(document).ready(function() {
	
		/*-----------------------------------------------------------------------------------*/
		/*  Social Counter JS
		/*-----------------------------------------------------------------------------------*/ 		
		var $URL = crestaPermalink.thePermalink;
		totalShares($URL);

			function ReplaceNumberWithCommas(shareNumber) {
				 if (shareNumber >= 1000000000) {
					return (shareNumber / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
				 }
				 if (shareNumber >= 1000000) {
					return (shareNumber / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
				 }
				 if (shareNumber >= 1000) {
					return (shareNumber / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
				 }
				 return shareNumber;
			}

		
			// SHARE COUNTS FUNCTIONS 
			if ( $('#googleplus-cresta').hasClass('googleplus-cresta-share') || $('#googleplus-cresta-c').hasClass('googleplus-cresta-share') ) {
				// Google Plus Shares Count
				var googleplusShares = crestaShareG.GPlusCount;
				$('#googleplus-count, #googleplus-count-content').text( ReplaceNumberWithCommas(googleplusShares) )
				$('#total-shares, #total-shares-content').attr('data-googleplusShares', googleplusShares)
			} else {
				$('#total-shares, #total-shares-content').attr('data-googleplusShares', 0)
			}

			if ( $('#stumbleupon-cresta').hasClass('stumbleupon-cresta-share') || $('#stumbleupon-cresta-c').hasClass('stumbleupon-cresta-share') ) {
				// Stumbleupon Shares Count
				var stumbleuponShares = crestaShareS.StumbleCount;
				$('#stumbleupon-count, #stumbleupon-count-content').text( ReplaceNumberWithCommas(stumbleuponShares) )
				$('#total-shares, #total-shares-content').attr('data-stumbleuponShares', stumbleuponShares)
			} else {
				$('#total-shares, #total-shares-content').attr('data-stumbleuponShares', 0)
			}
				
			// Facebook Shares Count
			function facebookShares($URL) {
				if ( $('#facebook-cresta').hasClass('facebook-cresta-share') || $('#facebook-cresta-c').hasClass('facebook-cresta-share') ) {
					$.getJSON('https://graph.facebook.com/?id=' + $URL, function (fbdata) {
						$('#facebook-count, #facebook-count-content').text( ReplaceNumberWithCommas(fbdata.shares || 0) )
						$('#total-shares, #total-shares-content').attr('data-facebookShares', fbdata.shares || 0)
					});
				} else {
					$('#total-shares, #total-shares-content').attr('data-facebookShares', 0)
				}
			}
			
			// Twitter Shares Count
			function twitterShares($URL) {
				if ( $('#twitter-cresta').hasClass('twitter-cresta-share') || $('#twitter-cresta-c').hasClass('twitter-cresta-share') ) {
					$.getJSON('https://cdn.api.twitter.com/1/urls/count.json?url=' + $URL + '&callback=?', function (twitdata) {
						$('#twitter-count, #twitter-count-content').text( ReplaceNumberWithCommas(twitdata.count) )
						$('#total-shares, #total-shares-content').attr('data-twitterShares', twitdata.count)
					});
				} else {
					$('#total-shares, #total-shares-content').attr('data-twitterShares', 0)
				}
			}

			// LinkedIn Shares Count
			function linkedInShares($URL) {
				if ( $('#linkedin-cresta').hasClass('linkedin-cresta-share') || $('#linkedin-cresta-c').hasClass('linkedin-cresta-share') ) {
					$.getJSON('https://www.linkedin.com/countserv/count/share?url=' + $URL + '&callback=?', function (linkedindata) {
						$('#linkedin-count, #linkedin-count-content').text( ReplaceNumberWithCommas(linkedindata.count) )
						$('#total-shares, #total-shares-content').attr('data-linkedInShares', linkedindata.count)
					});
				} else {
					$('#total-shares, #total-shares-content').attr('data-linkedInShares', 0)
				}
			}
			
			// Pinterest Shares Count
			function pinterestShares($URL) {
				if ( $('#pinterest-cresta').hasClass('pinterest-cresta-share') || $('#pinterest-cresta-c').hasClass('pinterest-cresta-share') ) {
					$.getJSON('https://api.pinterest.com/v1/urls/count.json?url=' + $URL + '&callback=?', function (pindata) {
						$('#pinterest-count, #pinterest-count-content').text( ReplaceNumberWithCommas(pindata.count) )
						$('#total-shares, #total-shares-content').attr('data-pinterestShares', pindata.count)
					});
				} else {
					$('#total-shares, #total-shares-content').attr('data-pinterestShares', 0)
				}
			}
			
			// Vkontakte Shares Count
			function vkShares($URL) {
				if ( $('#vk-cresta').hasClass('vk-cresta-share') || $('#vk-cresta-c').hasClass('vk-cresta-share') ) {
					if (!window.VK) window.VK = {};
                        if (!VK.Share) {
                            VK.Share = {
                                count: function (index, count) {
                                    $('#vk-count, #vk-count-content').text( ReplaceNumberWithCommas(count) )
									$('#total-shares, #total-shares-content').attr('data-vkShares', count)
                                }
                            };
                        }
					$.getJSON('https://vk.com/share.php?act=count&index=1&url=' + $URL + '&format=json&callback=?',null);
				} else {
					$('#total-shares, #total-shares-content').attr('data-vkShares', 0)
				}
			}
			
			// Buffer Shares Count
			function bufferShares($URL) {
				if ( $('#buffer-cresta').hasClass('buffer-cresta-share') || $('#buffer-cresta-c').hasClass('buffer-cresta-share') ) {
					$.getJSON('https://api.bufferapp.com/1/links/shares.json?url=' + $URL + '&callback=?', function (bufferdata) {
						$('#buffer-count, #buffer-count-content').text( ReplaceNumberWithCommas(bufferdata.shares) )
						$('#total-shares, #total-shares-content').attr('data-bufferShares', bufferdata.shares)
					});
				} else {
					$('#total-shares, #total-shares-content').attr('data-bufferShares', 0)
				}
			}

			// Check if all JSON calls are finished or not
			function checkJSON_getSum() {
				if ($('#total-shares, #total-shares-content').attr('data-facebookShares') != undefined && $('#total-shares, #total-shares-content').attr('data-twitterShares') != undefined &&
				$('#total-shares, #total-shares-content').attr('data-linkedinShares') != undefined && $('#total-shares, #total-shares-content').attr('data-pinterestShares') != undefined &&
				$('#total-shares, #total-shares-content').attr('data-stumbleuponShares') != undefined && $('#total-shares, #total-shares-content').attr('data-vkShares') != undefined &&
				$('#total-shares, #total-shares-content').attr('data-bufferShares') != undefined && $('#total-shares, #total-shares-content').attr('data-googleplusShares') != undefined) {
				
					if ( $('#facebook-cresta').hasClass('facebook-cresta-share') || $('#facebook-cresta-c').hasClass('facebook-cresta-share')) {
						var fbShares = parseInt($('#total-shares, #total-shares-content').attr('data-facebookShares'));
					} else {
						var fbShares = 0;
					}
					if ( $('#twitter-cresta').hasClass('twitter-cresta-share') || $('#twitter-cresta-c').hasClass('twitter-cresta-share')) {
						var twitShares = parseInt($('#total-shares, #total-shares-content').attr('data-twitterShares'));
					} else {
						var twitShares = 0;
					}
					if ( $('#linkedin-cresta').hasClass('linkedin-cresta-share') || $('#linkedin-cresta-c').hasClass('linkedin-cresta-share')) {
						var linkedInShares = parseInt($('#total-shares, #total-shares-content').attr('data-linkedinShares'));
					} else {
						var linkedInShares = 0;
					}
					if ( $('#pinterest-cresta').hasClass('pinterest-cresta-share') || $('#pinterest-cresta-c').hasClass('pinterest-cresta-share')) {
						var pinterestShares = parseInt($('#total-shares, #total-shares-content').attr('data-pinterestShares'));
					} else {
						var pinterestShares = 0;
					}
					if ( $('#stumbleupon-cresta').hasClass('stumbleupon-cresta-share') || $('#stumbleupon-cresta-c').hasClass('stumbleupon-cresta-share')) {
						var stumbleuponShares = parseInt($('#total-shares, #total-shares-content').attr('data-stumbleuponShares'));
					} else {
						var stumbleuponShares = 0;
					}
					if ( $('#vk-cresta').hasClass('vk-cresta-share') || $('#vk-cresta-c').hasClass('vk-cresta-share')) {
						var vkShares = parseInt($('#total-shares, #total-shares-content').attr('data-vkShares'));
					} else {
						var vkShares = 0;
					}
					if ( $('#buffer-cresta').hasClass('buffer-cresta-share') || $('#buffer-cresta-c').hasClass('buffer-cresta-share')) {
						var bufferShares = parseInt($('#total-shares, #total-shares-content').attr('data-bufferShares'));
					} else {
						var bufferShares = 0;
					}
					if ( $('#googleplus-cresta').hasClass('googleplus-cresta-share') || $('#googleplus-cresta-c').hasClass('googleplus-cresta-share')) {
						var googleplusShares = parseInt($('#total-shares, #total-shares-content').attr('data-googleplusShares'));
					} else {
						var googleplusShares = 0;
					}
					
				} else {
					setTimeout(function () {
						checkJSON_getSum();
					}, 200);
				}
				var totalShares = fbShares + twitShares + linkedInShares + pinterestShares + googleplusShares + stumbleuponShares + vkShares + bufferShares;
				$('#total-count, #total-count-content').text( ReplaceNumberWithCommas(totalShares) || 0 )
			}

			function totalShares($URL) {
				linkedInShares($URL);
				twitterShares($URL);
				facebookShares($URL);
				pinterestShares($URL);
				vkShares($URL);
				bufferShares($URL);
				checkJSON_getSum();
			}
	});
	
})(jQuery);