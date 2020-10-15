import Base from '../Base'
import Search from '../Search'
import SearchResults from '../pages/SearchResultsPage'

class InstagramPhoto {
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
    Base.interval()
    this.nextPhoto.waitForExist()
    this.nextPhoto.click()
  }

  likeAndContinue() {
    this.unlikeHeart.isExisting() ? this.clickNext() : this.clickLike()
  }

  switchTags() {
    Search.tagUrl(this.counter)
    this.counter = this.counter + 1
    Base.interval()
    SearchResults.clickOnAPhoto()
    this.likePhotos()
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  likePhotos() {
    for (let i = 0; i < this.getRndInteger(143, 242); i++) {
      const randomRes = Math.round(Math.random())
      if (!!randomRes) {
        Base.interval()
        this.likeAndContinue()
        this.checkForUserExistance()
      }
    }
    this.switchTags()
  }
}

export default new InstagramPhoto()
