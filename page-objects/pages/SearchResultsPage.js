export class SearchResults {
  clickOnAPhoto() {
    const topPostsPhoto = $(
      '#react-root > section > main > article > div.EZdmt > div > div > div:nth-child(1) > div:nth-child(1) > a > div'
    )
    topPostsPhoto.waitForExist()
    topPostsPhoto.click()
  }
}
