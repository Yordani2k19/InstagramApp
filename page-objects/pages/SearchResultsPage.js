class SearchResults {
  get topPosts() {
    // return $('.Saeqz')
    return $(
      '#react-root > section > main > article > div.EZdmt > div > div > div:nth-child(1) > div:nth-child(1) > a > div'
    )
  }

  clickOnAPhoto() {
    this.topPosts.waitForExist()
    this.topPosts.click()
    // this.topPosts.click({ x: 10, y: 50 })
  }
}

export default new SearchResults()
