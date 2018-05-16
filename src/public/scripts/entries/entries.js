import * as api from "../fetch.js";
import { create } from "../utils.js";
import { LikeBtn } from "./components/likeBtn.js";
import { Comments } from "./components/comments.js";
import { EditBtn } from "./components/editBtn.js";
import { DeleteBtn } from "./components/deleteBtn.js";

export default async function Entries(entry, comments, likes) {
  // Imports
  let likeBtnComp = LikeBtn(entry, likes);
  let commentsComp = Comments(comments);
  let editBtnComp = EditBtn(entry);
  let deleteBtnComp = DeleteBtn(entry);

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

  // Styling
  entryWrapper.classList.add("message");
  entryWrapperHeader.classList.add("message-header");
  entryWrapperBody.classList.add("message-body");
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
  entryWrapperHeader.appendChild(deleteBtn);

  // Append body components
  entryWrapperBody.appendChild(contentWrapper);
  entryWrapperBody.appendChild(date);
  entryWrapperBody.appendChild(commentsWrapper);
  entryWrapperBody.appendChild(likeBtn);
  entryWrapperBody.appendChild(commentSpan);
  entryWrapperBody.appendChild(commentBtn);
  entryWrapperBody.appendChild(commentInput);
  entryWrapperBody.appendChild(postCommentBtn);

  // Append to content divs
  entryWrapper.appendChild(entryWrapperHeader);
  entryWrapper.appendChild(entryWrapperBody);

  return entryWrapper;
}
