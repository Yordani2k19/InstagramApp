require('dotenv').config()

import { App, Search } from '../page-objects'

import {
  InstagramLogin,
  SearchResults,
  InstagramPhoto,
} from '../page-objects/pages'

const app = new App()
const search = new Search()

const instagramLogin = new InstagramLogin()
const searchResult = new SearchResults()
const instagramPhoto = new InstagramPhoto()

describe('Instagram Bot to like posts', () => {
  it('Login to Instagram', () => {
    app.openHomePage()
    instagramLogin.loginToInstagram(process.env.USERNAME, process.env.PASSWORD)
  })

  it('Search Tags', () => {
    search.tagUrl(0)
  })

  it('Like Posts', () => {
    searchResult.clickOnAPhoto()
    instagramPhoto.likePhotos()
  })
})
