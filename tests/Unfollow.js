require('dotenv').config()

import { App } from '../page-objects'
import { InstagramLogin, FollowedUsers } from '../page-objects/pages'

const app = new App()
const instagramLogin = new InstagramLogin()
const followedUsers = new FollowedUsers()

describe('Unfollow Users', () => {
  it('Login to Instagram', () => {
    app.openHomePage()
    instagramLogin.loginToInstagram(process.env.TEST_USER, process.env.TEST_PW)
  })

  it('Unfollow Users', async () => {
    await followedUsers.unfollowUsersLoop()
  })
})
