import * as api from "./fetch";
import { get, create } from "./utils";

export async function Searchbar() {
  let searchWrapper = get.id("search_wrapper");
  let searchbar = get.id("searchbar");

  let searchResults = create.elem("div");

  searchWrapper.style.position = "absolute";
  searchWrapper.style.zIndex = "100";

  let timer = null;

  document.body.addEventListener("click", function(e) {
    if (e.target !== searchbar) {
      searchbar.value = "";
      searchResults.innerHTML = "";
    }
  });

  searchbar.onkeyup = function() {
    clearTimeout(timer);

    timer = setTimeout(async function() {
      if (searchbar.value.length > 0) {
        searchResults.innerHTML = "";
        let entries = await api.get("entries");
        let filteredEntries = entries.data.filter(entry => {
          if (entry.title.includes(searchbar.value)) {
            return entry;
          }
        });
        filteredEntries.forEach(entry => {
          searchResults.appendChild(searchbarResults(entry));
        });
        searchWrapper.appendChild(searchResults);
      }
    }, 700);

    if (searchbar.value.length === 0) {
      searchResults.innerHTML = "";
    }
  };
}

function searchbarResults(entry) {
  let listOption = create.elem("a");
  let listOptionText = create.text(entry.title);
  listOption.style.position = "relative";

  listOption.appendChild(listOptionText);

  listOption.onclick = function() {
    window.location.href = "/entries/" + entry.entryID;
  };

  return listOption;
}
