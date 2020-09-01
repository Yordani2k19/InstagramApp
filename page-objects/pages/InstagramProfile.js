class InstagramProfile {
  get followerList() {
    return $(
      '#react-root > section > main > div > header > section > ul > li:nth-child(2) > a'
    )
  }

  openFollowerList() {
    this.followerList.waitForExist()
    this.followerList.click()
  }
}

export default new InstagramProfile()
