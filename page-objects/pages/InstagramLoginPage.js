class InstagramLogin {
  get loginForm() {
    return $('#loginForm')
  }

  get userInput() {
    return $('#loginForm > div > div:nth-child(1) > div > label > input')
  }

  get passwordInput() {
    return $('#loginForm > div > div:nth-child(2) > div > label > input')
  }

  get loginButton() {
    return $('#loginForm > div > div:nth-child(3) > button')
  }

  get searchBox() {
    return $(
      '#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.LWmhU._0aCwM > input'
    )
  }

  loginToInstagram(username, password) {
    this.loginForm.waitForExist()

    this.userInput.waitForExist()
    this.userInput.setValue(username)

    this.passwordInput.waitForExist()
    this.passwordInput.setValue(password)

    this.loginButton.waitForExist()
    this.loginButton.click()
    
    this.searchBox.waitForExist()
  }
}

export default new InstagramLogin()
