import * as api from "../fetch.js";
import { create } from "../utils.js";
import { LikeBtn } from "./components/likeBtn.js";
import { Comments } from "./components/comments.js";
import { DeleteBtn } from "./components/deleteBtn.js";

export async function Entries(entry, comments, likes) {
  // Imports
  let likeBtnComp = await LikeBtn(entry, likes);
  let commentsComp = await Comments(comments, entry.entryID);
  let deleteBtnComp = await DeleteBtn(entry);

  // Wrappers
  let entryWrapper = create.elem("div");
  let titleWrapper = create.elem("div");
  let contentWrapper = create.elem("div");
  let entryWrapperHeader = create.elem("div");
  let entryWrapperBody = create.elem("div");
  entryWrapperHeader.classList.add("title-style");

  // Elements
  let title = create.elem("h1");
  let createdBy = create.elem("a");
  let date = create.elem("p");
  let content = create.elem("p");
  let editBtn = await EditBtn();

  // Styling
  entryWrapper.classList.add("box");
  entryWrapper.classList.add("container-entry-style");
  entryWrapperHeader.classList.add("card-header");
  entryWrapperHeader.classList.add("box");
  entryWrapperBody.classList.add("card-body");
  entryWrapperBody.classList.add("box");
  entryWrapper.classList.add("entries_wrapper");

  let clT = ["entry_title", "title"];
  title.classList.add(...clT);

  // Text
  let titleText = create.text(entry.title);
  let contentText = create.text(entry.content);
  let dateText = create.text(entry.createdAt);
  let createdByText = create.text("written by: " + entry.entryUsername);
  date.classList.add("entries-date-style");

  // Append Text
  title.appendChild(titleText);
  createdBy.appendChild(createdByText);
  date.appendChild(dateText);
  content.appendChild(contentText);
  titleWrapper.appendChild(title);
  contentWrapper.appendChild(content);
  contentWrapper.classList.add("content-style");
  createdBy.classList.add("entry_createdBy");

  createdBy.setAttribute("href", "/profile/" + entry.createdBy);

  // Append header components
  entryWrapperHeader.appendChild(titleWrapper);
  entryWrapperHeader.appendChild(editBtn);

  // Clicking title will bring user to individual entry
  title.onclick = function() {
    window.location.href = "/entries/" + entry.entryID;
  };

  // Appends delete button if the user is the creator of the entry or admin
  if (
    sessionStorage["admin"] == 1 ||
    sessionStorage["userID"] == entry.createdBy
  ) {
    entryWrapperHeader.appendChild(deleteBtnComp);
  }

  // Append body components

  entryWrapperBody.appendChild(date);
  entryWrapperBody.appendChild(createdBy);
  entryWrapperBody.appendChild(contentWrapper);
  entryWrapperBody.appendChild(commentsComp);
  entryWrapperBody.appendChild(likeBtnComp);

  // Append to content divs
  entryWrapper.appendChild(entryWrapperHeader);
  entryWrapper.appendChild(entryWrapperBody);

  // EDIT BUTTON
  function EditBtn() {
    let editBtn = create.elem("button");
    const clsE = ["button", "is-primary"];
    editBtn.classList.add(...clsE);

    let editIcon = create.elem("i");
    editIcon.classList.add("fas");
    editIcon.classList.add("fa-pencil-alt");
    editIcon.classList.add("icons");
    editBtn.appendChild(editIcon);


    editBtn.onclick = function() {
      editBtn.disabled = true;
      let editTitle = create.elem("input");
      editTitle.classList.add("input");
      let editContent = create.elem("textarea");
      editContent.classList.add("textarea");
      let sendEditBtn = create.elem("button");
      let cancelEditBtn = create.elem("button");
      const clsEd = ["button","is-outlined", "is-primary"];
      const clsD = ["button","is-outlined", "is-danger"];
      sendEditBtn.classList.add(...clsEd);
      sendEditBtn.classList.add("is-small");
      cancelEditBtn.classList.add(...clsD);
      cancelEditBtn.classList.add("is-small");

      editTitle.setAttribute("type", "text");
      editContent.cols = "30";
      editContent.rows = "10";

      editTitle.value = titleText.textContent;
      editContent.value = contentText.textContent;
      sendEditBtn.innerHTML = "Confirm changes";
      cancelEditBtn.innerHTML = "Cancel edit";

      let sendIcon = create.elem("i");
      sendIcon.classList.add("fas");
      sendIcon.classList.add("fa-paper-plane");
      sendIcon.classList.add("icons");
      sendEditBtn.appendChild(sendIcon);

      let cancelIcon = create.elem("i");
      cancelIcon.classList.add("fas");
      cancelIcon.classList.add("fa-times");
      cancelIcon.classList.add("icons");
      cancelEditBtn.appendChild(cancelIcon);

      title.remove();
      content.remove();

      titleWrapper.appendChild(editTitle);
      contentWrapper.appendChild(editContent);
      contentWrapper.appendChild(sendEditBtn);
      contentWrapper.appendChild(cancelEditBtn);

      sendEditBtn.onclick = async function() {
        let body = {
          title: editTitle.value,
          content: editContent.value
        };
        let patchedEntry = await api.update("entries", entry.entryID, body);
        console.log(patchedEntry.data);
        cancelEdit(patchedEntry.data);
        editBtn.disabled = false;
      };

      cancelEditBtn.onclick = async function() {
        let earlierData = await api.getOne("entries", entry.entryID);
        cancelEdit(earlierData.data);
        editBtn.disabled = false;
      };

      async function cancelEdit(patchedEntry) {
        title = create.elem("h2");
        title.classList.add("title");
        content = create.elem("p");
        content.classList.add("content");

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
