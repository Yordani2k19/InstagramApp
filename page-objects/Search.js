class Search {
  profileUrl() {
    browser.url('https://www.instagram.com/petermckinnon/')
  }

  /* 
    above is an example of how the url works
    copy the profile's url that you wish to interact
    with their follower base and paste inside the ' here '
*/

  tagUrl() {
    browser.url('https://www.instagram.com/explore/tags/miamiphotography/')
  }
}

/*
    follow the same example as above, but instead
    copy and paste a tag url, keep in mind that if you paste the links
    where they shouldn't go the bot will not work at all
*/

export default new Search()
