<div align="center">
  <h1>Minimal YouTube Viewer</h1>
</div>

A YouTube Front-End that reduces unncessary elements to prevent distraction.

<p align="center">
  <img src="img/comparison-screenshots.jpg" width="1080" alt="Minimal Youtube Viewer Comparison">
</p>

### Why?
YouTube is a great source for education but their business model incentivizes the platform to keep you on as long as possible so that they can serve you more and more ads, profiting more and more from your attention.

This is done by maximizing engagement with the platform, often by bombarding the user with unlimited optionality and outrageous content.

This Front-End seeks to remove the distraction so that you can use YouTube with more intentionality and reclaim your attention.

### How?
It works by using the [YouTube Data API](https://developers.google.com/youtube/v3) to return a list of search results for a given query and the [ReturnYoutubeDislike API](https://www.returnyoutubedislike.com/) for additional video statistics. Videos are then displayed by embedding the video with the selected ID on the page.


### Next Steps: Blocking Ads
Install an adblocker, such as [uBlock Origin](https://ublockorigin.com/).

### Next Steps: Adding Redirection
You can add redirects to automatically use Minimal YouTube Viewer for all YouTube links.

Note that only the Home Page, Search Results, and Video Player are supported (no channels, playlists, etc).

**Firefox Web Browser**\
To redirect all links to YouTube, install the [Redirector](https://addons.mozilla.org/en-US/firefox/addon/redirector/) addon and add a new redirect:
<p align="center">
  <img src="img/redirector-settings.jpg" width="500" alt="Redirector settings">
</p>

**Kagi Search Engine**\
  To redirect all links to YouTube within web search results, go to the <a href="https://kagi.com/settings?p=redirects" target="_blank">Redirects Settings</a> and add a new redirect rule:\
  ```^https://www.youtube.com(.*)|https://callumr00.github.io/minimal-youtube-viewer$1```
