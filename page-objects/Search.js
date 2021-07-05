export class Search {
  profileUrl(counter) {
    const PROFILES = [
      "https://www.instagram.com/petermckinnon/",
      "https://www.instagram.com/thechrishau/",
      "https://www.instagram.com/mattih/",
      "https://www.instagram.com/brandonwoelfel/",
      "https://www.instagram.com/kai.boet/",
      "https://www.instagram.com/charlysavely/",
      "https://www.instagram.com/joshsavely/",
    ];

    browser.url(PROFILES[counter]);
  }

  tagUrl(counter) {
    const TAGS = [
      "https://www.instagram.com/explore/search/keyword/?q=miami%20models",
      "https://www.instagram.com/explore/search/keyword/?q=miami%20photoshoot",
      "https://www.instagram.com/explore/search/keyword/?q=miami",
      "https://www.instagram.com/explore/search/keyword/?q=miami%20photography",
    ];

    browser.url(TAGS[counter]);
  }
}
