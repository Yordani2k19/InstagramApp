import { Base } from '../Base'
import { readFile, clearFile } from '../../fs'
import { LIST_OF_USER_FILES } from './InstagramFollower'

const base = new Base()

export class FollowedUsers {
  unfollowUser() {
    return $(
      '#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.vBF20._1OSdk > button > div > span'
    )
  }

  unfollowUserConfirmation() {
    return $(
      'body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_'
    )
  }

  async unfollowUsersLoop() {
    const usersList = await readFile(LIST_OF_USER_FILES)

    for (let i = 0; i < usersList.length; i++) {
      try {
        await browser.url(usersList[i].profileUrl)

        await base.interval()

        try {
          const unfollowUsersElement = await this.unfollowUser()
          await unfollowUsersElement.waitForExist()
          await unfollowUsersElement.click()

          await base.interval()

          const unfollowUsersElementConfirmation = await this.unfollowUserConfirmation()
          await unfollowUsersElementConfirmation.waitForExist()
          await unfollowUsersElementConfirmation.click()
        } catch (error) {
          console.log('Error in unfollowing action: ', error)
          await browser.refresh()
        }

        await base.interval()
      } catch (error) {
        console.log('Unfollow Error: ', error)
      }
    }
    await clearFile(LIST_OF_USER_FILES)
  }
}
