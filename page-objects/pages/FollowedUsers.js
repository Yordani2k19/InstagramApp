import Base from '../Base'
import InstagramProfile from '../pages/InstagramProfile'

class FollowedUsers {
  unfollowUsers(childPosition) {
    const unfollowButton = $(
      `body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div > li:nth-child(${childPosition}) > div > div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button`
    )
    const unfollowUserConfirmation = $(
      '/html/body/div[6]/div/div/div/div[3]/button[1]'
    )

    try {
      Base.interval()
      unfollowButton.waitForExist()
      unfollowButton.click()
      Base.interval()
      unfollowUserConfirmation.waitForExist()
      unfollowUserConfirmation.click()
    } catch {
      Base.refresh()
      Base.interval()
      InstagramProfile.openFollowingList()
      this.unfollowUsersLoop()
    }
  }

  get followingTitle() {
    return $('.m82CD')
  }

  moveToFollowingTitle() {
    this.followingTitle.waitForExist()
    this.followingTitle.moveTo()
  }

  unfollowUsersLoop() {
    for (let i = 0; i < 50; i++) {
      if (this.followingTitle.isExisting()) {
        this.moveToFollowingTitle()
        this.unfollowUsers(i + 1)
      } else {
        InstagramProfile.openFollowingList()
        this.moveToFollowingTitle()
        this.unfollowUsers(i + 1)
      }
    }
  }
}

export default new FollowedUsers()
