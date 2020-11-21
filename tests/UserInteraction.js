require('dotenv').config()

import App from '../page-objects/App'
import Search from '../page-objects/Search'
import InstagramLogin from '../page-objects/pages/InstagramLoginPage'
import InstagramProfile from '../page-objects/pages/InstagramProfile'
import InstagramFollower from '../page-objects/pages/InstagramFollower'

describe('Instagram Bot to Like and Follow other Profiles', () => {
  it('Login to Instagram', () => {
    App.openHomePage()
    InstagramLogin.loginToInstagram('your username', 'your password')
  })

  it('Search for a Profile using the URL', () => {
    Search.profileUrl(0)
    /*
      Inside page-objects, open Search.js
      Inside Search.js you will find directions
      to correctly place the url for profiles and/or
      tags.
    */
  })

  it('Open the Follower List of that profile', () => {
    InstagramProfile.openFollowerList()
  })

  it('Interaction with other Users', () => {
    InstagramFollower.interactionLoop()
  })
})

/* 
  To run the other bot, go to wdio.conf.js which is at the
  bottom usually, and only LINE 19 and LINE 20, simply uncomment the //other file
  Currently, there are only TWO(2) tests, LikeBot.js and UserInteraction.js (this one)
*/
