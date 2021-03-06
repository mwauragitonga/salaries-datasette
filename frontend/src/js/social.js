import { on } from "./utils.js";

on("click", ".icon-twitter.js-click", e => {
  var tweet = e.currentTarget.getAttribute("data-share-text");
  var url = e.currentTarget.getAttribute("data-url");
  if (!url) {
    url = window.location.href;
  }

  var twitterURL =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(tweet) +
    "&url=" +
    encodeURIComponent(url) +
    "&tw_p=tweetbutton";
  window.open(twitterURL, "_blank", "width=500,height=300,toolbar=no");
  return false;
});

on("click", ".icon-facebook.js-click", e => {
  // FaceBook has deprecated all the options in the pop-up,
  // so it all needs to be controlled by the meta tags on the page.
  // See https://developers.facebook.com/docs/sharing/reference/feed-dialog
  var url = e.currentTarget.getAttribute("data-url");
  if (!url) {
    url = window.location.href;
  }

  var facebookURL =
    "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" +
    encodeURIComponent(url) +
    "&redirect_uri=https://www.facebook.com";
  window.open(facebookURL, "_blank", "width=500,height=500,toolbar=no");
  return false;
});
