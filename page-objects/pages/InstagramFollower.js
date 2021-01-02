import Base from '../Base'
import Search from '../Search'
import InstagramProfile from '../pages/InstagramProfile'

import { nanoid } from 'nanoid'

import fs from 'fs'
export const LIST_OF_USER_FILES = 'page-objects/data/userData.txt'

export const readFile = (file, defaultTo = []) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf-8' }, function(err, _file) {
      console.log('_file', typeof _file)
      if (err) {
        reject(err)
      } else {
        resolve(_file && _file.length ? JSON.parse(_file) : defaultTo)
      }
    })
  })

const writeToFile = (file, dataToAdd) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(dataToAdd), function(err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })

const addUserToFollowedList = async url => {
  const users = await readFile(LIST_OF_USER_FILES)
  const newUsers = [...users, { profileUrl: url, profileID: nanoid() }]
  await writeToFile(LIST_OF_USER_FILES, newUsers)
}
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
    if (this.userIsBeingFollowed.isExisting() || this.followBackButton.isExisting()) {
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

  interactionLoop() {
    for (let i = 0; i < 50; i++) {
      if (this.followerTitle.isExisting()) {
        this.moveToFollowerTitle()

        Base.interval()
        
        try {
          this.clickFollower(i + 1)

        } catch (error) {
          Base.refresh()
          console.log('Clicked on follower error: ', error)
        }      

        Base.interval()

        this.interact()

      } else {
        InstagramProfile.openFollowerList()

        this.moveToFollowerTitle()

        Base.interval()

        try {
          this.clickFollower(i + 1)
          
        } catch (error) {
          Base.refresh()
          console.log(error)
        }      

        Base.interval()

        this.interact()
      }
    }
  }
}

export default new InstagramFollower()
