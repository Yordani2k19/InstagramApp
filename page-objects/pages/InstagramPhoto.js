import { Base, Search } from '../index'
import { SearchResults } from '../pages/SearchResultsPage'

const base = new Base()
const search = new Search()
const searchResults = new SearchResults()

export class InstagramPhoto {
  constructor() {
    this.counter = 1
  }

  get user() {
    return $('body > div._2dDPU.CkGkG > div.zZYga > div > article')
  }

  get likeHeart() {
    return $(
      'body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button > div > span > svg'
    )
  }

  get unlikeHeart() {
    return $('svg[aria-label="Unlike"]')
  }

  get nextPhoto() {
    return $(
      'body > div._2dDPU.CkGkG > div.EfHg9 > div > div > a._65Bje.coreSpriteRightPaginationArrow'
    )
  }

  checkForUserExistance() {
    this.user.isExisting() ? this.clickLike() : this.clickNext()
  }

  clickLike() {
    this.likeHeart.waitForExist()
    this.likeHeart.click()
    this.clickNext()
  }

  clickNext() {
    base.interval()
    this.nextPhoto.waitForExist()
    this.nextPhoto.click()
  }

  likeAndContinue() {
    this.unlikeHeart.isExisting() ? this.clickNext() : this.clickLike()
  }

  switchTags() {
    search.tagUrl(this.counter)
    this.counter = this.counter + 1
    base.interval()
    searchResults.clickOnAPhoto()
    this.likePhotos()
  }

  likePhotos() {
    for (let i = 0; i < base.getRndInteger(140, 250); i++) {
      const randomRes = Math.round(Math.random())
      if (!!randomRes) {
        for (let i = 0; i < base.getRndInteger(1, 8); i++) {
          base.interval()
          this.likeAndContinue()
        }
      } else {
        for (let i = 0; i < base.getRndInteger(1, 3); i++) {
          base.interval()
          this.clickNext()
        }
      }
    }
    this.switchTags()
  }
}
