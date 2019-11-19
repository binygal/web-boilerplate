window.addEventListener("DOMContentLoaded", () => {
  console.log("loading");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./workers/serviceWorker-v1.ts")
      .then(r => {
        console.log("registered");
      });
  }
});
