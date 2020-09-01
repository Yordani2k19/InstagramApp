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
      console.log('Needs to scroll')
    }
  }

  get follower() {
    return $('.isgrP a')
  } // this selector is only returning the first value

  get followButton() {
    return $(
      '#react-root > section > main > div > header > section > div.nZSzR > div.BY3EC > div > span > span.vBF20._1OSdk > button'
    )
  }

  get followerPhotos() {
    return $('.v1Nh3 kIKUG  _bz0w')
  }

  get nextButton() {
    return $('body > div._2dDPU.CkGkG > div.EfHg9 > div > div > a')
  }

  clickFollower() {
    this.follower.waitForExist()
    this.follower.click()
  }

  followUser() {
    this.followButton.isExisting()
      ? this.followButton.click()
      : /* function required */ null
  }

  clickFollowerPhotos() {
    this.followerPhotos.waitForExist()
    this.followerPhotos.click()
  }

  clickNext() {
    this.nextButton.waitForExist()
    this.nextButton.click()
  }

  interactionLoop() {
    for (let i = 0; i < 50; i++) {
      //this.clickFollower()
      this.getChild(i + 1)
      Base.interval()
      browser.back()
    }
  }
}

export default new InstagramFollower()
