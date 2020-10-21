class Base {
  pauseShort() {
    browser.pause(2000)
  }
  pauseMedium() {
    browser.pause(5000)
  }

  interval() {
    const interval = Math.floor(Math.random() * 4 + 1)
    browser.pause(interval * 1000)
  }

  back() {
    browser.back()
  }

  refresh() {
    browser.refresh()
  }
}

export default new Base()
