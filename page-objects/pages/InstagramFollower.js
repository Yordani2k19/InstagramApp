import Base from '../Base'
import Search from '../Search'
import InstagramProfile from '../pages/InstagramProfile'

class InstagramFollower {
  constructor() {
    this.counter = 1
  }

  clickFollower(childPosition) {
    const child = $(
      `body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div > li:nth-child(${childPosition}) a`
    )
    try {
      child.waitForExist()
      child.click()
    } catch {
      Search.profileUrl(this.counter)
      this.counter = this.counter + 1
      this.testLoop()
    }
  }

  get followerTitle() {
    return $('body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > h1')
  }

  get followerPhotos() {
    return $('.v1Nh3 kIKUG  _bz0w')
  }

  get posts() {
    return $(
      '#react-root > section > main > div > div._2z6nI > article > div > div > div:nth-child(1) > div:nth-child(1)'
    )
  }

  get followButton() {
    return $(
      '#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div > div > span > span.vBF20._1OSdk > button'
    )
  }

  get userIsBeingFollowed() {
    return $(
      '#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.vBF20._1OSdk > button > div > span'
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

  moveToFollowerTitle() {
    this.followerTitle.waitForExist()
    this.followerTitle.moveTo()
  }

  clickPhoto() {
    this.posts.waitForExist()
    this.posts.click()
  }

  clickFollow() {
    this.followButton.waitForExist()
    this.followButton.click()
  }

  clickLike() {
    this.likePhotos.waitForExist()
    this.likePhotos.click()
  }

  closePhoto() {
    this.closeWindow.waitForExist()
    this.closeWindow.click()
  }

  interactFunction() {
    /* 
      Function is working properly for the first 2 steps
      continue on as last time we were prevented because
      the pop-up started to appear.

      Work on saving the cookies to be able to start up
      already inside the app to avoid detection
    */

    if (this.userIsBeingFollowed.isExisting()) {
      Base.back()
    } else {
      // user is being followed else
      if (this.posts.isExisting()) {
        this.clickFollow()
        this.clickPhoto()
      } else {
        Base.back()
      }
      if (this.likePhotos.isExisting()) {
        this.clickLike()
      } else {
        // like photos else
      }
      if (this.closeWindow.isExisting()) {
        this.closePhoto()
      } else {
        // close photo else
        Base.back()
        Base.interval()
        Base.back()
      }
    }
  }

  interact() {
    if (this.userIsBeingFollowed.isExisting()) {
      Base.back()
    } else {
      if (this.posts.isExisting()) {
        this.clickFollow()
        Base.interval()
        this.clickPhoto()
        Base.interval()
        this.clickLike()
        Base.interval()
        this.closePhoto()
        Base.back()
        Base.interval()
        Base.back()
      } else {
        Base.back()
      }
    }
  }

  testLoop() {
    for (let i = 0; i < 60; i++) {
      if (this.followerTitle.isExisting()) {
        this.moveToFollowerTitle()
        Base.interval()
        this.clickFollower(i + 1)
        Base.interval()
        // this.clickFollow()
        this.interactFunction()
        // this.interact()
      } else {
        InstagramProfile.openFollowerList()
        this.moveToFollowerTitle()
        Base.interval()
        this.clickFollower(i + 1)
        Base.interval()
        // this.clickFollow()
        this.interactFunction()
        // this.interact()
      }
    }
  }

  interactionLoop() {
    for (let i = 0; i < 30; i++) {
      this.getChild(i + 1)
      Base.interval()
      this.interact()
      Base.interval()
    }
  }
}

export default new InstagramFollower()
