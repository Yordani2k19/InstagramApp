export class InstagramLogin {
  loginToInstagram(username, password) {
    const loginForm = $('#loginForm')
    loginForm.waitForExist()

    const userInput = $(
      '#loginForm > div > div:nth-child(1) > div > label > input'
    )
    userInput.waitForExist()
    userInput.setValue(username)

    const passwordInput = $(
      '#loginForm > div > div:nth-child(2) > div > label > input'
    )
    passwordInput.waitForExist()
    passwordInput.setValue(password)

    const loginButton = $('#loginForm > div > div:nth-child(3) > button')
    loginButton.waitForExist()
    loginButton.click()

    const searchBox = $(
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.LWmhU._0aCwM > input'
    )
    searchBox.waitForExist()
  }

  instagramLogout() {
    // create logout here to call at the end of every test
    // must click on icon and confirm existance
    // then follow through the log out
    // and confirm existance
  }
}
