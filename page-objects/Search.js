class Search {
  profileUrl(counter) {
    const PROFILES = [
      'https://www.instagram.com/petermckinnon/',
      'https://www.instagram.com/thechrishau/',
      'https://www.instagram.com/mattih/',
      'https://www.instagram.com/brandonwoelfel/',
      'https://www.instagram.com/kai.boet/',
      'https://www.instagram.com/charlysavely/',
      'https://www.instagram.com/joshsavely/'
    ]
    browser.url(PROFILES[counter])
  }

  /* 
    above is an example of how the URls are used.
    it is better if you place profiles with a high
    amount of followers for better results.
*/

  tagUrl(counter) {
    const TAGS = [
      'https://www.instagram.com/explore/tags/miamiphotography/',
      'https://www.instagram.com/explore/tags/miamiphotographer/',
      'https://www.instagram.com/explore/tags/miami/',
      'https://www.instagram.com/explore/tags/miamimodel/',
      'https://www.instagram.com/explore/tags/miamimodels/'
    ]
    browser.url(TAGS[counter])
  }
}

/*
    follow the same example as above, but instead
    copy and paste a tag url, keep in mind that if you paste the links
    where they shouldn't go the bot will not work at all
*/

export default new Search()
