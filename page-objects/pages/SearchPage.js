class SearchPage {
  openProfileDropdown() {
    const profile = $(
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > span > img'
    )
    profile.waitForExist()
    profile.click()
  }

  openProfile() {
    const profile = $(
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > div:nth-child(3) > div > div.uo5MA._2ciX.tWgj8.XWrBI > div._01UL2 > a:nth-child(1)'
    )
    profile.waitForExist()
    profile.click()
  }
}

export default new SearchPage()
