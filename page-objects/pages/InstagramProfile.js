class InstagramProfile {
  get followerList() {
    return $(
      '#react-root > section > main > div > header > section > ul > li:nth-child(2) > a'
    )
  }

  get followedList() {
    return $(
      '#react-root > section > main > div > header > section > ul > li:nth-child(3) > a'
    )
  }

  openFollowerList() {
    this.followerList.waitForExist()
    this.followerList.click()
  }

  openFollowingList() {
    this.followedList.waitForExist()
    this.followedList.click()
  }
}

export default new InstagramProfile()
