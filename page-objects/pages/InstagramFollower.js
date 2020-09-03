import Base from '../Base'

class InstagramFollower {
  getChild(childPosition) {
    const child = $(
      `body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div > li:nth-child(${childPosition}) a`
    )

    try {
      child.waitForExist()
      child.click()
    } catch {
      // needs to scroll
    }
  }

  get followerPhotos() {
    return $('.v1Nh3 kIKUG  _bz0w')
  }

  get posts() {
    return $(
      '#react-root > section > main > div > div._2z6nI > article > div > div > div:nth-child(1) > div:nth-child(1)'
    )
  }

  get likePhotos() {
    return $('svg[aria-label="Like"]')
  }

  get unlikedHeart() {
    return $('svg[aria-label="Unlike"]')
  }

  get nextPhoto() {
    return $('body > div._2dDPU.CkGkG > div.EfHg9 > div > div > a')
  }

  get closeWindow() {
    return $(
      'body > div._2dDPU.CkGkG > div.Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG > button > div > svg'
    )
  }

  clickLike() {
    this.likePhotos.waitForExist()
    this.likePhotos.click()
    this.clickNext()
  }

  clickNext() {
    this.nextPhoto.waitForExist()
    this.nextPhoto.click()
  }

  likeOrNoLike() {
    this.unlikedHeart.isExisting() ? this.clickNext() : this.clickLike()
  }

  closePhoto() {
    this.closeWindow.waitForExist()
    this.closeWindow.click()
  }

  clickPhotos() {
    if (this.posts.isExisting()) {
      this.posts.waitForExist()
      this.posts.click()
      for (let i = 0; i < 3; i++) {
        Base.interval()
        this.likeOrNoLike()
        Base.interval()
      }
    } else {
      Base.back()
    }
  }

  interactionLoop() {
    for (let i = 0; i < 50; i++) {
      this.getChild(i + 1)
      Base.interval()
      this.clickPhotos()
      Base.interval()
    }
  }
}

/*
  once function calls browser.url('https://www.instagram.com/petermckinnon/)
  make random for likePhotos
*/

export default new InstagramFollower()
