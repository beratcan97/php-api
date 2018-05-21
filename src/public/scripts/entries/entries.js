import * as api from '../fetch.js';
import { create } from '../utils.js';
import { LikeBtn } from './components/likeBtn.js';
import { Comments } from './components/comments.js';
import { DeleteBtn } from './components/deleteBtn.js';

export async function Entries(entry, comments, likes) {
  // Imports
  const likeBtnComp = await LikeBtn(entry, likes);
  const commentsComp = await Comments(comments, entry.entryID);
  const deleteBtnComp = await DeleteBtn(entry);
  const editBtn = await EditBtn();

  // Wrappers
  const entryWrapper = create.elem('div');
  const titleWrapper = create.elem('div');
  const deleteEditWrapper = create.elem('div');
  const contentWrapper = create.elem('div');
  const entryWrapperHeader = create.elem('div');
  const entryWrapperBody = create.elem('div');

  // Elements
  let title = create.elem('h1');
  const createdBy = create.elem('a');
  const date = create.elem('p');
  let content = create.elem('p');

  // get classes
  const clEWH = ['card-header', 'box', 'title-style'];
  const clEWB = ['card-body', 'box'];
  const clEW = ['card', 'container-entry-style', 'entries_wrapper'];
  const clT = ['entry_title', 'title'];

  // apply classes
  entryWrapperHeader.classList.add(...clEWH);
  entryWrapperBody.classList.add(...clEWB);
  entryWrapper.classList.add(...clEW);
  title.classList.add(...clT);

  date.classList.add('entries-date-style');
  contentWrapper.classList.add('content-style');
  createdBy.classList.add('entry_createdBy');

  // Text
  let titleText = create.text(entry.title);
  let contentText = create.text(entry.content);
  const dateText = create.text(entry.createdAt);
  const createdByText = create.text(`written by: ${entry.entryUsername}`);

  // Append Text
  title.appendChild(titleText);
  createdBy.appendChild(createdByText);
  date.appendChild(dateText);
  content.appendChild(contentText);
  titleWrapper.appendChild(title);
  contentWrapper.appendChild(content);

  // Append header components
  entryWrapperHeader.appendChild(titleWrapper);

  // Click events
  createdBy.setAttribute('href', `/profile/${entry.entryUsername}`);

  title.onclick = function() {
    window.location.href = `/entries/${entry.entryID}`;
  };

  // Appends delete button if the user is the creator of the entry or admin
  if (sessionStorage.admin == 1 || sessionStorage.userID == entry.createdBy) {
    deleteEditWrapper.appendChild(deleteBtnComp);
    deleteEditWrapper.appendChild(editBtn);
    entryWrapperHeader.appendChild(deleteEditWrapper);
  }

  // Append body components
  entryWrapperBody.appendChild(date);
  entryWrapperBody.appendChild(createdBy);
  entryWrapperBody.appendChild(contentWrapper);
  entryWrapperBody.appendChild(likeBtnComp);
  entryWrapperBody.appendChild(commentsComp);

  // Append to content divs
  entryWrapper.appendChild(entryWrapperHeader);
  entryWrapper.appendChild(entryWrapperBody);

  // EDIT BUTTON
  function EditBtn() {
    const editBtn = create.elem('button');
    const clsE = ['button', 'is-primary'];
    editBtn.classList.add(...clsE);

    const editIcon = create.elem('i');
    editIcon.classList.add('fas');
    editIcon.classList.add('fa-pencil-alt');
    editIcon.classList.add('icons');
    editBtn.appendChild(editIcon);

    editBtn.onclick = function() {
      editBtn.disabled = true;
      const editTitle = create.elem('input');
      editTitle.classList.add('input');
      const editContent = create.elem('textarea');
      editContent.classList.add('textarea');
      const sendEditBtn = create.elem('button');
      const cancelEditBtn = create.elem('button');
      const clsEd = ['button', 'is-outlined', 'is-primary'];
      const clsD = ['button', 'is-outlined', 'is-danger'];
      sendEditBtn.classList.add(...clsEd);
      sendEditBtn.classList.add('is-small');
      cancelEditBtn.classList.add(...clsD);
      cancelEditBtn.classList.add('is-small');

      editTitle.setAttribute('type', 'text');
      editContent.cols = '30';
      editContent.rows = '10';

      editTitle.value = titleText.textContent;
      editContent.value = contentText.textContent;
      sendEditBtn.innerHTML = 'Confirm changes';
      cancelEditBtn.innerHTML = 'Cancel edit';

      const sendIcon = create.elem('i');
      sendIcon.classList.add('fas');
      sendIcon.classList.add('fa-paper-plane');
      sendIcon.classList.add('icons');
      sendEditBtn.appendChild(sendIcon);

      const cancelIcon = create.elem('i');
      cancelIcon.classList.add('fas');
      cancelIcon.classList.add('fa-times');
      cancelIcon.classList.add('icons');
      cancelEditBtn.appendChild(cancelIcon);

      title.remove();
      content.remove();

      titleWrapper.appendChild(editTitle);
      contentWrapper.appendChild(editContent);
      contentWrapper.appendChild(sendEditBtn);
      contentWrapper.appendChild(cancelEditBtn);

      sendEditBtn.onclick = async function() {
        const body = {
          title: editTitle.value,
          content: editContent.value,
        };
        const patchedEntry = await api.update('entries', entry.entryID, body);
        console.log(patchedEntry.data);
        cancelEdit(patchedEntry.data);
        editBtn.disabled = false;
      };

      cancelEditBtn.onclick = async function() {
        const earlierData = await api.getOne('entries', entry.entryID);
        cancelEdit(earlierData.data);
        editBtn.disabled = false;
      };

      async function cancelEdit(patchedEntry) {
        title = create.elem('h2');
        title.classList.add('title');
        content = create.elem('p');
        content.classList.add('content');

        titleText = create.text(patchedEntry.title);
        contentText = create.text(patchedEntry.content);

        title.appendChild(titleText);
        content.appendChild(contentText);

        editTitle.remove();
        editContent.remove();
        sendEditBtn.remove();
        cancelEditBtn.remove();

        titleWrapper.appendChild(title);
        contentWrapper.appendChild(content);
      }
    };

    return editBtn;
  }

  return entryWrapper;
}
