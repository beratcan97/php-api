import * as api from '../modules/fetch';
import { Entries } from '../components/entries/entries';
import { get } from '../modules/utils';

//  build entries
export async function BuildEntries() {
  const entriesContainer = get.id('entries_container');

  if (entriesContainer) {
    const loader = document.createElement('DIV');
    loader.classList.add('loader');
    document.body.appendChild(loader);

    let userRoute = 'entries';
    entriesContainer.innerHTML = '';

    if (window.location.pathname.includes('/profile/')) {
      let newPathName = window.location.pathname;
      newPathName = newPathName.split('/');
      userRoute = `entries/user/${newPathName[2]}`;
    }

    if (window.location.pathname.includes('/entries/')) {
      let newPathName = window.location.pathname;
      newPathName = newPathName.split('/');
      userRoute = `entries/${newPathName[2]}`;
    }

    const userEntries = await api.get(userRoute);

    // Checks if entries are returned as 0, {} or []
    if (userEntries.data.length !== 0) {
      if (!userEntries.data.length) {
        const commentRoute = `comments/entries/${userEntries.data.entryID}`;
        const comments = await api.get(commentRoute);

        const likesRoute = `likes/${userEntries.data.entryID}`;
        const likes = await api.get(likesRoute);

        const newEntry = await Entries(
          userEntries.data,
          comments.data,
          likes.data
        );
        entriesContainer.appendChild(newEntry);
      } else {
        for (let i = 0; i < userEntries.data.length; i++) {
          const commentRoute = `comments/entries/${
            userEntries.data[i].entryID
          }`;
          const comments = await api.get(commentRoute);

          const likesRoute = `likes/${userEntries.data[i].entryID}`;
          const likes = await api.get(likesRoute);

          const newEntry = await Entries(
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
}
