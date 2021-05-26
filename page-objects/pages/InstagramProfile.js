export class InstagramProfile {
  openFollowerList() {
    const followerList = $(
      '#react-root > section > main > div > header > section > ul > li:nth-child(2) > a'
    )
    followerList.waitForExist()
    followerList.click()
  }

  openFollowingList() {
    const followedList = $(
      '#react-root > section > main > div > header > section > ul > li:nth-child(3) > a'
    )
    followedList.waitForExist()
    followedList.click()
  }
}
