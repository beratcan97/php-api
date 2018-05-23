import * as api from '../modules/fetch';
import { Entries } from '../components/entries/entries';
import { get } from '../modules/utils';

export async function BuildEntries() {
  const entriesContainer = get.id('entries_container');

  // Checks if current page has entriesContainer to prevent errors
  if (entriesContainer) {
    // init loader
    const loader = document.createElement('DIV');
    loader.classList.add('loader');
    document.body.appendChild(loader);

    let userRoute = 'entries';
    entriesContainer.innerHTML = '';

    // Check current page pathname and edit route accordingly
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

    // entries are simply objects if not in an array
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
        // ordinary for-loops can handle await
        for (let i = 0; i < userEntries.data.length; i++) {
          const commentRoute = `comments/entries/${
            userEntries.data[i].entryID
          }`;
          const likesRoute = `likes/${userEntries.data[i].entryID}`;

          const comments = await api.get(commentRoute);
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

    // stop loader
    loader.remove();
  }
}
