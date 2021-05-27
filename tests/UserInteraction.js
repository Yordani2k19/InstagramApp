require("dotenv").config();

import { App, Search } from "../page-objects";
import {
  InstagramLogin,
  InstagramProfile,
  InstagramFollower,
} from "../page-objects/pages";

const app = new App();
const search = new Search();
const instagramLogin = new InstagramLogin();
const instagramProfile = new InstagramProfile();
const instagramFollower = new InstagramFollower();

describe("Instagram Bot to Like and Follow other Profiles", () => {
  it("Login to Instagram", () => {
    app.openHomePage();
    instagramLogin.loginToInstagram(process.env.USERNAME, process.env.PASSWORD);
  });

  it("Search for a Profile using the URL", () => {
    search.profileUrl(0);
  });

  it("Open the Follower List of that profile", () => {
    instagramProfile.openFollowerList();
  });

  it("Interaction with other Users", () => {
    instagramFollower.interactionLoop();
  });

  it("Log out from App", () => {
    instagramLogin.instagramLogout();
  });
});
