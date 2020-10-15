/*
  Only modify, or play with the code if you
  have knowledge of what you're changing, a 
  simple change can cause an error resulting in
  the script not running or crashing 
*/

require('dotenv').config()

import App from '../page-objects/App'
import Search from '../page-objects/Search'
import InstagramLogin from '../page-objects/pages/InstagramLoginPage'
import SearchResults from '../page-objects/pages/SearchResultsPage'
import InstagramPhoto from '../page-objects/pages/InstagramPhoto'

describe('Instagram Bot to like posts', () => {
  it('Login to Instagram', () => {
    App.openHomePage()
    InstagramLogin.loginToInstagram(process.env.USERNAME, process.env.PASSWORD)
  })

  it('Search Tags', () => {
    Search.tagUrl(0)
    /*
      Inside page-objects, open Search.js
      Inside Search.js you will find directions
      to correctly place the url for a profile
    */
  })

  it('Like Posts', () => {
    SearchResults.clickOnAPhoto()
    InstagramPhoto.likePhotos()
  })
})

/* 
  To run the other bot, go to wdio.conf.js which is at the
  bottom usually, and only LINE 19 just change the name of the file.
  Currently, there are only TWO(2) tests, LikeBot.js (this one) and UserInteraction.js
*/
