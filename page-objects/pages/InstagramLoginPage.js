import { Base } from "../index";

const base = new Base();
export class InstagramLogin {
  loginToInstagram(username, password) {
    const loginForm = $("#loginForm");
    loginForm.waitForExist();

    const userInput = $(
      "#loginForm > div > div:nth-child(1) > div > label > input"
    );
    userInput.waitForExist();
    userInput.setValue(username);

    const passwordInput = $(
      "#loginForm > div > div:nth-child(2) > div > label > input"
    );
    passwordInput.waitForExist();
    passwordInput.setValue(password);

    const loginButton = $("#loginForm > div > div:nth-child(3) > button");
    loginButton.waitForExist();
    loginButton.click();

    const searchBox = $(
      "#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.LWmhU._0aCwM > input"
    );
    searchBox.waitForExist();
  }

  instagramLogout() {
    const userDropDown = $(
      "#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > span"
    );
    userDropDown.waitForExist();
    userDropDown.click();

    base.interval();

    const logoutLink = $(
      "#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > div.poA5q > div.uo5MA._2ciX.tWgj8.XWrBI > div._01UL2 > div:nth-child(6) > div"
    );
    logoutLink.waitForExist();
    logoutLink.click();
  }
}
