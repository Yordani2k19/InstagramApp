import Base from '../Base'
import { readFile } from '../pages/InstagramFollower'

import fs from 'fs'
const FILE = 'page-objects/data/userData.txt'

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
    const users = await readFile(FILE)
    const usersToBeDeleted = 'page-objects/data/userData.txt'

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

    for (let i = 0; i < users.length; i++) {
      try {
        await browser.url(users[i].profileUrl)    

        await Base.interval()
        
        const unfollowEl = await this.unfollowUser()
        await unfollowEl.waitForExist()
        await unfollowEl.click()

        await Base.interval()

        const unffollowConfEl = await this.unfollowUserConfirmation()
        await unffollowConfEl.waitForExist()
        await unffollowConfEl.click()

        await Base.interval() 

      } catch (error) {
        console.log("Unfollow Error: ", error)
      }
    }
    await clearFile(usersToBeDeleted)
  }
}

export default new FollowedUsers()
