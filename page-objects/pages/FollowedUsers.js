import Base from '../Base'
import InstagramProfile from '../pages/InstagramProfile'

class FollowedUsers {
  //   unfollowUsers(childPosition) {
  //     const unfollowButton = $(
  //       `body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div > li:nth-child(${childPosition}) > div > div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button`
  //     )
  //     const unfollowUserConfirmation = $(
  //       'body > div:nth-child(18) > div > div > div > div.mt3GC > button.aOOlW.-Cab_'
  //     )
  //     try {
  //       Base.interval()
  //       unfollowButton.waitForExist()
  //       unfollowButton.click()
  //       Base.interval()
  //       unfollowUserConfirmation.waitForExist()
  //       unfollowUserConfirmation.click()
  //       console.log('bruu')
  //     } catch {
  //       throw new Error(console.log('shit broek bruh'))
  //     }
  //   }

  unfollowUsersLongWay(childPosition) {
    const child = $(
      `body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div > li:nth-child(${childPosition}) a`
    )

    try {
      Base.interval()
      child.waitForExist()
      child.click()
    } catch {
      Base.refresh()
      Base.interval()
      InstagramProfile.openFollowingList()
      Base.interval()
      this.unfollowUsersLoop()
    }
  }

  unfollow() {
    const unfollowUser = $(
      '#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.vBF20._1OSdk > button > div > span'
    )
    const unfollowUserConfirmation = $(
      'body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_'
    )

    Base.interval()
    unfollowUser.waitForExist()
    unfollowUser.click()
    Base.interval()
    unfollowUserConfirmation.waitForExist()
    unfollowUserConfirmation.click()
  }

  get followingTitle() {
    return $('body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > h1')
  }

  moveToFollowingTitle() {
    this.followingTitle.waitForExist()
    this.followingTitle.moveTo()
  }

  unfollowUsersLoop() {
    for (let i = 0; i < 50; i++) {
      if (this.followingTitle.isExisting) {
        this.moveToFollowingTitle()
        this.unfollowUsersLongWay(i + 1)
        this.unfollow()
        Base.interval()
        Base.back()
      } else {
        InstagramProfile.openFollowingList()
        this.moveToFollowingTitle()
        this.unfollowUsersLongWay(i + 1)
        this.unfollow()
        Base.interval()
        Base.back()
      }
    }
  }
}

export default new FollowedUsers()
