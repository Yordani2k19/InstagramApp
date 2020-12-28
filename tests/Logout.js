require('dotenv').config()

import App from '../page-objects/App'
import InstagramLogin from '../page-objects/pages/InstagramLoginPage'
import SearchPage from '../page-objects/pages/SearchPage'
// import InstagramProfile from '../page-objects/pages/InstagramProfile'

describe('Unfollow Users', () => {
  it('Login to Instagram', () => {
    App.openHomePage()
    InstagramLogin.loginToInstagram(process.env.TEST_USER, process.env.TEST_PW)
  })

  it('Log Out', () => {
    SearchPage.openProfileDropdown()
    SearchPage.clickLogout()
  })
})
