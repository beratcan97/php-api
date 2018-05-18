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

  if (window.location.pathname.includes("/profile/")) {
    let newPathName = window.location.pathname;
    newPathName = newPathName.split("/");
    userRoute = "entries/user/" + newPathName[2];
  }

  if (window.location.pathname.includes("/entries/")) {
    let newPathName = window.location.pathname;
    newPathName = newPathName.split("/");
    userRoute = "entries/" + newPathName[2];
  }

  let userEntries = await api.get(userRoute);

  // Checks if entries are returned as 0, {} or []
  if (userEntries.data.length !== 0) {
    if (!userEntries.data.length) {
      let commentRoute = "comments/entries/" + userEntries.data.entryID;
      let comments = await api.get(commentRoute);

      let likesRoute = "likes/" + userEntries.data.entryID;
      let likes = await api.get(likesRoute);

      let newEntry = await Entries(userEntries.data, comments.data, likes.data);
      entriesContainer.appendChild(newEntry);
    } else {
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
    }
  }

  loader.remove();
}
