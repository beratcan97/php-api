import * as api from "./fetch";
import { get } from "./utils";

export async function Searchbar() {
  let searchbar = get.id("searchbar");

  let timer = null;

  searchbar.onkeyup = function() {
    clearTimeout(timer);

    timer = setTimeout(async function() {
      let entries = await api.get("entries");
      let filteredEntries = entries.data.map(entry => {
        if (entry.title.includes(searchbar.value)) {
          return entry;
        }
      });
      console.log(filteredEntries);
    }, 700);
  };
}
