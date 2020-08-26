class SearchResults {
  get topPosts() {
    return $('.Saeqz')
  }

  clickOnAPhoto() {
    this.topPosts.waitForExist()
    this.topPosts.click({ x: 10, y: 50 })
  }
}

export default new SearchResults()
