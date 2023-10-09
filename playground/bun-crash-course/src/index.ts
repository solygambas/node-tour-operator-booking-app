import fetchUser from "./githubAPI";

(async () => {
  const userData = await fetchUser("bradtraversy");
  document.querySelector("p").innerHTML = JSON.stringify(userData);
})();
