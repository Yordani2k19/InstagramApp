import { nanoid } from 'nanoid'
import { readFile, writeToFile } from '../../fs'
import { Base, Search } from '../index'
import { InstagramProfile } from '../pages/InstagramProfile'

const path = require('path')

const base = new Base()
const search = new Search()
const instagramProfile = new InstagramProfile()

export const LIST_OF_USER_FILES = path.join(
  __dirname,
  '../../data/userData.txt'
)

const addUserToFollowedList = async (url) => {
  try {
    const users = await readFile(LIST_OF_USER_FILES)
    const newUsers = [...users, { profileUrl: url, profileID: nanoid() }]
    await writeToFile(LIST_OF_USER_FILES, newUsers)
  } catch (error) {
    console.log('nemo', error)
  }
}
export class InstagramFollower {
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
      search.profileUrl(this.counter)
      this.counter = this.counter + 1
      this.interactionLoop()
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

  get followBackButton() {
    return $(
      '#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div > button'
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
    addUserToFollowedList(browser.getUrl())
  }

  clickLike() {
    this.likePhotos.waitForExist()
    this.likePhotos.click()
  }

  closePhoto() {
    this.closeWindow.waitForExist()
    this.closeWindow.click()
  }

  interact() {
    if (
      this.userIsBeingFollowed.isExisting() ||
      this.followBackButton.isExisting()
    ) {
      base.back()
    } else {
      if (this.posts.isExisting()) {
        this.clickFollow()

        base.interval()

        this.clickPhoto()

        base.interval()

        this.clickLike()

        base.interval()

        this.closePhoto()

        base.back()
        base.interval()
        base.back()
      } else {
        base.back()
      }
    }
  }

  interactionLoop() {
    for (let i = 0; i < 50; i++) {
      if (this.followerTitle.isExisting()) {
        this.moveToFollowerTitle()

        base.interval()

        try {
          this.clickFollower(i + 1)
        } catch (error) {
          base.refresh()
          console.log('Clicked on follower error: ', error)
        }

        base.interval()

        this.interact()
      } else {
        instagramProfile.openFollowerList()

        this.moveToFollowerTitle()

        base.interval()

        try {
          this.clickFollower(i + 1)
        } catch (error) {
          base.refresh()
          console.log('interactionLoop error: ', error)
        }

        base.interval()

        this.interact()
      }
    }
  }
}
