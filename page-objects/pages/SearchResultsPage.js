export class SearchResults {
  clickOnAPhoto() {
    const photo = $(
      "#react-root > section > main > div > div.K6yM_ > div > div:nth-child(1) > div:nth-child(2) > div > a > div > div._9AhH0"
    );
    photo.waitForExist();
    photo.click();
  }
}
