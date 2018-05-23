import * as api from '../../modules/fetch';
import { get, create } from '../../modules/utils';

export async function Searchbar() {
  const searchWrapper = get.id('search_wrapper');
  const searchbar = get.id('searchbar');
  const searchVal = searchbar.value.toLowerCase();
  const searchResults = create.elem('div');

  let timer = null;

  document.body.addEventListener('click', (e) => {
    if (e.target !== searchbar) {
      searchbar.value = '';
      searchResults.innerHTML = '';
    }
  });

  searchbar.onkeyup = function() {
    clearTimeout(timer);

    timer = setTimeout(async () => {
      if (searchbar.value.length > 0) {
        searchResults.innerHTML = '';
        const entries = await api.get('entries');
        const filteredEntries = entries.data.filter((entry) => {
          if (entry.title.includes(searchVal)) {
            return entry;
          }
        });
        filteredEntries.forEach((entry) => {
          searchResults.appendChild(searchbarResults(entry));
        });
        searchWrapper.appendChild(searchResults);
      }
    }, 700);

    if (searchbar.value.length === 0) {
      searchResults.innerHTML = '';
    }
  };
}

function searchbarResults(entry) {
  const listOption = create.elem('a');
  const listOptionText = create.text(entry.title);
  listOption.classList.add('search_results');

  listOption.appendChild(listOptionText);

  listOption.onclick = function() {
    window.location.href = `/entries/${entry.entryID}`;
  };

  return listOption;
}
