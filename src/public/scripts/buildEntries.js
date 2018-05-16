import * as api from "./fetch.js";
import { Entries } from "./entries/entries.js";
import { entriesContainer } from "./main.js";

//  build entries
export async function BuildEntries() {
  let loader = document.createElement("DIV");
  loader.classList.add("loader");
  document.body.appendChild(loader);

  let userRoute = "entries";
  entriesContainer.innerHTML = "";

  // if (
  //   window.location.pathname ===
  //   "/profile/" + sessionStorage.getItem("username")
  // ) {
  if (window.location.pathname === "/profile/") {
    userRoute = "entries/user/" + sessionStorage.getItem("userID");
  }

  let userEntries = await api.get(userRoute);

  for (let i = 0; i < userEntries.data.length; i++) {
    let commentRoute = "comments/entries/" + userEntries.data[i].entryID;
    let comments = await api.get(commentRoute);

    let likesRoute = "likes/" + userEntries.data[i].entryID;
    let likes = await api.get(likesRoute);

    let newEntry = await Entries(
      userEntries.data[i],
      comments.data,
      likes.data
    );
    entriesContainer.appendChild(newEntry);
  }

  loader.remove();
}
