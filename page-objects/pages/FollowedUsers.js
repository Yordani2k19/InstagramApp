import { readFile } from '../pages/InstagramFollower'
import { LIST_OF_USER_FILES } from './InstagramFollower'

import fs from 'fs'

class FollowedUsers {
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
    const interval = await Math.floor(Math.random() * 4 + 1)

    const clearFile = (file) =>
      new Promise((resolve, reject) => {    
        fs.truncate(file, 0, function(err){
          if (err) {
            reject(err)
          } else {
            resolve()
          }                  
          console.log('Done')
        })        
    })

    for (let i = 0; i < usersList.length; i++) {
      try {
        await browser.url(usersList[i].profileUrl)
        
        await browser.pause(interval * 1000)
        
        const unfollowUsersElement = await this.unfollowUser()
        await unfollowUsersElement.waitForExist()
        await unfollowUsersElement.click()

        await browser.pause(interval * 1000)

        const unfollowUsersElementConfirmation = await this.unfollowUserConfirmation()
        await unfollowUsersElementConfirmation.waitForExist()
        await unfollowUsersElementConfirmation.click()

        await browser.pause(interval * 1000)

        await deleteUrl(i)

      } catch (error) {
        console.log("Unfollow Error: ", error)
      }
    }
    await clearFile(LIST_OF_USER_FILES)
  }
}

export default new FollowedUsers()
