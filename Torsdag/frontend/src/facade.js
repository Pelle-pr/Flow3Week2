import utils from "./utils";

function Facade() {
  const jokesURL =
    "http://localhost:8080/devops_starter_war_exploded/api/jokes";
  const scrapeURL = "http://localhost:8080/countries";

  function getJokes(callback) {
    utils.fetchAny(jokesURL, callback);
    //TODO: Get Labels from server
  }

  function getScrape(callback) {
    utils.fetchAny(scrapeURL, callback);
    //TODO: Get Countries from server
  }
  return {
    getJokes,
    getScrape,
  };
}

export default Facade();
