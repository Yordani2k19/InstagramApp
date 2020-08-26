import Base from '../Base'

class InstagramPhoto {
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

  get followButton() {
    return $(
      'body > div._2dDPU.CkGkG > div.zZYga > div > article > header > div.o-MQd > div.PQo_0 > div.bY2yH > button'
    )
  }

  get unfollowButton() {
    return $(
      'body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_'
    )
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

  follow() {
    this.followButton.waitForExist()
    this.followButton.click()
    if (this.unfollowButton.isExisting()) {
      this.unfollow()
    }
  }

  unfollow() {
    this.unfollowButton.waitForExist()
    this.unfollowButton.click()
  }

  likePhotos() {
    for (let i = 0; i < 1000; i++) {
      const randomRes = Math.round(Math.random())
      if (!!randomRes) {
        Base.interval()
        this.likeAndContinue()
        this.checkForUserExistance()
      }
    }
  }

  likeAndFollow() {
    for (let i = 0; i < 1000; i++) {
      const randomRes = Math.round(Math.random())
      if (!!randomRes) {
        Base.interval()
        this.follow()
        Base.interval()
        this.likeAndContinue()
      }
    }
  }
}

export default new InstagramPhoto()
