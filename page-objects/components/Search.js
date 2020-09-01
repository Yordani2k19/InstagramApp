class Search {
  get searchBox() {
    return $(
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.LWmhU._0aCwM > input'
    )
  }

  get hashtag() {
    return $(
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.LWmhU._0aCwM > div:nth-child(5) > div.drKGC > div > a:nth-child(1) > div > span'
    )
  }

  /*
  Test Account selector for hashtag()
  #react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.LWmhU._0aCwM > div:nth-child(5) > div.drKGC > div > a:nth-child(1)
  */

  get user() {
    return $('.Ap253')
  }

  searchFor(search) {
    this.searchBox.waitForExist()
    this.searchBox.setValue(search)
  }

  clickHashtag() {
    this.hashtag.waitForExist()
    this.hashtag.click()
  }

  clickUser() {
    this.user.waitForExist()
    this.user.click()
  }
}

export default new Search()
