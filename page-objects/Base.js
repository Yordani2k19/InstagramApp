export class Base {
  pauseShort() {
    browser.pause(2000)
  }
  pauseMedium() {
    browser.pause(5000)
  }

  interval() {
    return new Promise(async (resolve) => {
      const interval = Math.floor(Math.random() * 4 + 1) * 1000
      browser.pause(interval)
      setTimeout(resolve, interval)
    })
  }

  back() {
    browser.back()
  }

  refresh() {
    browser.refresh()
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
}
