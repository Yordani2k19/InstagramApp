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

export default new Search()
