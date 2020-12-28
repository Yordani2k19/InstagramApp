require('dotenv').config()

import App from '../page-objects/App'
import InstagramLogin from '../page-objects/pages/InstagramLoginPage'
import FollowedUsers from '../page-objects/pages/FollowedUsers'

describe('Unfollow Users', () => {
  it('Login to Instagram', () => {
    App.openHomePage()
    InstagramLogin.loginToInstagram(process.env.USERNAME, process.env.PASSWORD)
  })

  it('Unfollow Users', async () => {
    await FollowedUsers.unfollowUsersLoop()
  })
})
