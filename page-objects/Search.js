export class Search {
  profileUrl(counter) {
    const PROFILES = [
      'https://www.instagram.com/petermckinnon/',
      'https://www.instagram.com/thechrishau/',
      'https://www.instagram.com/mattih/',
      'https://www.instagram.com/brandonwoelfel/',
      'https://www.instagram.com/kai.boet/',
      'https://www.instagram.com/charlysavely/',
      'https://www.instagram.com/joshsavely/',
    ]

    browser.url(PROFILES[counter])
  }

  tagUrl(counter) {
    const TAGS = [
      'https://www.instagram.com/explore/tags/jeepjk/',
      'https://www.instagram.com/explore/tags/jeep/',
      'https://www.instagram.com/explore/tags/wrangler/',
      'https://www.instagram.com/explore/tags/jeepwrangler/',
    ]

    browser.url(TAGS[counter])
  }
}
