class SearchResults {
  get topPostsPhoto() {
    return $(
      '#react-root > section > main > article > div.EZdmt > div > div > div:nth-child(1) > div:nth-child(1) > a > div'
    )
  }

  clickOnAPhoto() {
    this.topPostsPhoto.waitForExist()
    this.topPostsPhoto.click()
  }
}

export default new SearchResults()
