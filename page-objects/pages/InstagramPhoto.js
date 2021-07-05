import { Base, Search } from "../index";
import { SearchResults } from "../pages/SearchResultsPage";

const base = new Base();
const search = new Search();
const searchResults = new SearchResults();

export class InstagramPhoto {
  constructor() {
    this.counter = 1;
  }

  checkForUserExistance() {
    const user = $("body > div._2dDPU.CkGkG > div.zZYga > div > article");
    user.isExisting() ? this.clickLike() : this.clickNext();
  }

  clickLike() {
    const likeHeart = $(
      "body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button > div > span > svg"
    );
    likeHeart.waitForExist();
    likeHeart.click();

    this.clickNext();
  }

  clickNext() {
    base.interval();

    const nextPhoto = $(
      "body > div._2dDPU.CkGkG > div.EfHg9 > div > div > a._65Bje.coreSpriteRightPaginationArrow"
    );

    try {
      nextPhoto.waitForExist();
      nextPhoto.click();
    } catch (error) {
      if (error) {
        base.interval();
        search.tagUrl(this.counter);
        this.counter = this.counter + 1;

        base.interval();
        searchResults.clickOnAPhoto();
      } else {
        console.log(error);
      }
    }
  }

  likeAndContinue() {
    const unlikeHeart = $('svg[aria-label="Unlike"]');
    unlikeHeart.isExisting() ? this.clickNext() : this.clickLike();
  }

  switchTags() {
    search.tagUrl(this.counter);
    this.counter = this.counter + 1;
    base.interval();
    searchResults.clickOnAPhoto();
    this.likePhotos();
  }

  likePhotos() {
    for (let i = 0; i < base.getRndInteger(140, 250); i++) {
      const randomRes = Math.round(Math.random());
      if (!!randomRes) {
        for (let i = 0; i < base.getRndInteger(1, 4); i++) {
          base.interval();
          this.clickLike();
        }
      } else {
        for (let i = 0; i < base.getRndInteger(1, 2); i++) {
          base.interval();
          this.clickNext();
        }
      }
    }
    this.switchTags();
  }
}
