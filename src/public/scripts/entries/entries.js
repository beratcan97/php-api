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

  // Elements
  let title = create.elem("h1");
  let createdBy = create.elem("h2");
  let date = create.elem("p");
  let content = create.elem("p");
  let editBtn = await EditBtn();

  // Styling
  entryWrapper.classList.add("card");
  entryWrapperHeader.classList.add("card-header");
  entryWrapperBody.classList.add("card-body");
  entryWrapper.classList.add("entries_wrapper");
  title.classList.add("title");

  // Text
  let titleText = create.text(entry.title);
  let contentText = create.text(entry.content);
  let dateText = create.text(entry.createdAt);
  let createdByText = create.text("written by: " + entry.entryUsername);

  // Append Text
  title.appendChild(titleText);
  createdBy.appendChild(createdByText);
  date.appendChild(dateText);
  content.appendChild(contentText);
  titleWrapper.appendChild(title);
  contentWrapper.appendChild(content);

  // Append header components
  entryWrapperHeader.appendChild(titleWrapper);
  entryWrapperHeader.appendChild(createdBy);
  entryWrapperHeader.appendChild(editBtn);
  entryWrapperHeader.appendChild(deleteBtnComp);

  // Append body components
  entryWrapperBody.appendChild(contentWrapper);
  entryWrapperBody.appendChild(date);
  entryWrapperBody.appendChild(commentsComp);
  entryWrapperBody.appendChild(likeBtnComp);

  // Append to content divs
  entryWrapper.appendChild(entryWrapperHeader);
  entryWrapper.appendChild(entryWrapperBody);

  // EDIT BUTTON
  function EditBtn() {
    let editBtn = create.elem("button");
    const clsE = ["button", "is-outlined", "is-success"];
    editBtn.classList.add(...clsE);

    let editText = create.text("Edit");
    editBtn.appendChild(editText);

    editBtn.onclick = function() {
      editBtn.disabled = true;
      let editTitle = create.elem("input");
      editTitle.classList.add("input");
      let editContent = create.elem("textarea");
      editContent.classList.add("textarea");
      let sendEditBtn = create.elem("button");
      let cancelEditBtn = create.elem("button");

      editTitle.setAttribute("type", "text");
      editContent.cols = "30";
      editContent.rows = "10";

      editTitle.value = titleText.textContent;
      editContent.value = contentText.textContent;
      sendEditBtn.innerHTML = "Confirm changes";
      cancelEditBtn.innerHTML = "Cancel edit";

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
        content = create.elem("p");

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
