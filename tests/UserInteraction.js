require('dotenv').config()

import App from '../page-objects/App'
import Search from '../page-objects/Search'
import InstagramLogin from '../page-objects/pages/InstagramLoginPage'
import InstagramProfile from '../page-objects/pages/InstagramProfile'
import InstagramFollower from '../page-objects/pages/InstagramFollower'

describe('Instagram Bot to Like and Follow other Profiles', () => {
  it('Login to Instagram', () => {
    App.openHomePage()
    InstagramLogin.loginToInstagram(process.env.USERNAME, process.env.PASSWORD)
  })

  it('Search for a Profile using the URL', () => {
    Search.profileUrl(0)
  })

  it('Open the Follower List of that profile', () => {
    InstagramProfile.openFollowerList()
  })

  it('Interaction with other Users', () => {
    InstagramFollower.interactionLoop()
  })
})