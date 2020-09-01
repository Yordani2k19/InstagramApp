require('dotenv').config()

import App from '../page-objects/App'
import Search from '../page-objects/components/Search'
import InstagramLogin from '../page-objects/pages/InstagramLoginPage'
import SearchResults from '../page-objects/pages/SearchResultsPage'
import InstagramPhoto from '../page-objects/pages/InstagramPhoto'

describe('Instagram Bot to like posts', () => {
  it('Login to Instagram', () => {
    App.openHomePage()
    InstagramLogin.loginToInstagram(process.env.USERNAME, process.env.PASSWORD)
  })

  it('Search Tags', () => {
    Search.searchFor('miamiphotography')
    Search.clickHashtag()
  })

  it('Like Posts', () => {
    SearchResults.clickOnAPhoto()
    InstagramPhoto.likePhotos()
  })
})
