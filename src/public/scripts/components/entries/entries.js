import * as api from '../../modules/fetch';
import { create } from '../../modules/utils';
import { LikeBtn } from './partials/likeBtn';
import { Comments } from './partials/comments';
import { DeleteBtn } from './partials/deleteBtn';

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

  // set attributes
  createdBy.setAttribute('href', `/profile/${entry.entryUsername}`);

  // get classes
  const clEWH = ['card-header', 'box', 'title-style'];
  const clEWB = ['card-body', 'box'];
  const clEW = ['card', 'container-entry-style', 'entries-wrapper'];
  const clT = ['entry-title', 'title'];

  // apply classes
  entryWrapperHeader.classList.add(...clEWH);
  entryWrapperBody.classList.add(...clEWB);
  entryWrapper.classList.add(...clEW);
  title.classList.add(...clT);
  date.classList.add('entries-date-style');
  contentWrapper.classList.add('content-style');
  createdBy.classList.add('entry-createdBy');

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

  title.onclick = function() {
    window.location.href = `/entries/${entry.entryID}`;
  };

  // append to header
  entryWrapperHeader.appendChild(titleWrapper);

  // Append to body
  entryWrapperBody.appendChild(date);
  entryWrapperBody.appendChild(createdBy);
  entryWrapperBody.appendChild(contentWrapper);
  entryWrapperBody.appendChild(likeBtnComp);
  entryWrapperBody.appendChild(commentsComp);

  // Appends delete button if the user is the OP or admin
  if (
    sessionStorage.admin === '1' ||
    sessionStorage.userID === entry.createdBy
  ) {
    deleteEditWrapper.appendChild(deleteBtnComp);
    deleteEditWrapper.appendChild(editBtn);
    entryWrapperHeader.appendChild(deleteEditWrapper);
  }

  // Append to content divs
  entryWrapper.appendChild(entryWrapperHeader);
  entryWrapper.appendChild(entryWrapperBody);

  // EDIT BUTTON
  function EditBtn() {
    const editBtn = create.elem('button');
    const editIcon = create.elem('i');

    // get classes
    const clsE = ['button', 'is-primary'];
    const clsEI = ['fas', 'fa-pencil-alt', 'icons'];

    // Apply classes
    editBtn.classList.add(...clsE);
    editIcon.classList.add(...clsEI);

    editBtn.appendChild(editIcon);

    // Click events
    editBtn.onclick = function() {
      editBtn.disabled = true;

      // create elements
      const editTitle = create.elem('input');
      const editContent = create.elem('textarea');
      const sendEditBtn = create.elem('button');
      const cancelEditBtn = create.elem('button');
      const sendIcon = create.elem('i');
      const cancelIcon = create.elem('i');

      // create text
      const sendEditBtnText = create.text('Confirm changes');
      const cancelEditBtnText = create.text('Cancel edit');

      // set attributes
      editContent.cols = '30';
      editContent.rows = '10';
      editTitle.setAttribute('type', 'text');

      // get classes
      const clsEd = ['button', 'is-outlined', 'is-primary', 'is-small'];
      const clsD = ['button', 'is-outlined', 'is-danger', 'is-small'];
      const clsSI = ['fas', 'fa-paper-plane', 'icons'];
      const clsCI = ['fas', 'fa-times', 'icons'];

      // apply classes
      editTitle.classList.add('input');
      editContent.classList.add('textarea');
      sendEditBtn.classList.add(...clsEd);
      cancelEditBtn.classList.add(...clsD);
      sendIcon.classList.add(...clsSI);
      cancelIcon.classList.add(...clsCI);

      // apply text
      editTitle.value = titleText.textContent;
      editContent.value = contentText.textContent;
      sendEditBtn.appendChild(sendEditBtnText);
      cancelEditBtn.appendChild(cancelEditBtnText);

      // Remove static title & content
      title.remove();
      content.remove();

      // append stuff
      sendEditBtn.appendChild(sendIcon);
      cancelEditBtn.appendChild(cancelIcon);
      titleWrapper.appendChild(editTitle);
      contentWrapper.appendChild(editContent);
      contentWrapper.appendChild(sendEditBtn);
      contentWrapper.appendChild(cancelEditBtn);

      // Confirm edit button
      sendEditBtn.onclick = async function() {
        const body = {
          id: entry.entryID,
          title: editTitle.value,
          content: editContent.value,
        };
        const patchedEntry = await api.updateEntry(body);
        cancelEdit(patchedEntry.data);
        editBtn.disabled = false;
      };

      // Cancel edit button
      cancelEditBtn.onclick = async function() {
        const earlierData = await api.getOne('entries', entry.entryID);
        cancelEdit(earlierData.data);
        editBtn.disabled = false;
      };

      // Revert from edit mode to normal entry
      function cancelEdit(patchedEntry) {
        title = create.elem('h2');
        content = create.elem('p');

        title.classList.add('title');
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
  } // end EditBtn()

  return entryWrapper;
}
