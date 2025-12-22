let placeholdingBlur = document.getElementById("placeholding-blur");
let placeholdingName = document.getElementById("placeholding-name");
let placeholdingBanner = document.getElementById("placeholding-banner");
let expirationTime = Date.now() + 24 * 60 * 60 * 1000; // in miliseconds

function sleep(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener("load", async (event) => {
  // Retrieve the data
  let cachedData = JSON.parse(localStorage.getItem("loaded"));
  const currentTime = Date.now();

  // Check if cached data exists and has not expired
  if (cachedData && cachedData.expires > currentTime) {
    if (placeholdingBanner) {
      await sleep(300);
      placeholdingBanner.style.transition = "all 1s";
      placeholdingBanner.style.opacity = "0";
      placeholdingName.style.opacity = "0.3";
      await sleep(900);
      placeholdingBanner.style.display = "none";
    }
  } else {
    if (placeholdingBanner) {
      placeholdingBanner.style.transition = "all 0.2s";
      placeholdingBanner.style.opacity = "0";
      placeholdingName.style.opacity = "0.3";
      placeholdingBanner.style.display = "none";
      // Convert the data to a JSON string and save it
      // Example data to store
      localStorage.removeItem("loaded");
      let dataToCache = { loaded: true, expires: expirationTime };
      localStorage.setItem("loaded", JSON.stringify(dataToCache));
    }
  }
});
