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
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > div.poA5q > div.uo5MA._2ciX.tWgj8.XWrBI > div._01UL2 > a:nth-child(1)'
    )
    profile.waitForExist()
    profile.click()
  }

  clickLogout() {
    const logoutButton = $(
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > div.poA5q > div.uo5MA._2ciX.tWgj8.XWrBI > div._01UL2 > div:nth-child(6)'
    )
    logoutButton.waitForExist()
    logoutButton.click()
  }
}

export default new SearchPage()
