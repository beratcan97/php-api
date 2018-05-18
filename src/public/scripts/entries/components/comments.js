import * as api from "../../fetch.js";
import { create } from "../../utils";

export async function Comments(comments, entryID) {
  let amountOfComments;
  let commentsContainer = create.elem("div");
  let commentsWrapper = create.elem("div");
  commentsWrapper.classList.add("box");
  commentsWrapper.classList.add("comments-box");
  let commentSpan = create.elem("p");
  commentSpan.classList.add("box");
  let commentInput = create.elem("textarea");
  let postCommentBtn = create.elem("button");

  let addCommentBtn = create.elem("button");
  let commentBtn = create.elem("button");

  if (!comments) {
    amountOfComments = 0;
  } else {
    amountOfComments = comments.length;
    comments.forEach(comment => {
      let newComment = commentsBuilder(comment);
      commentsWrapper.appendChild(newComment);
    });

    commentsWrapper.classList.add("toggle_visible");

    commentSpan.onclick = function() {
      commentsWrapper.classList.toggle("toggle_visible");
    };
  }

  const clsLC = ["button", "is-outlined", "is-info", "is-small"];
  commentBtn.classList.add(...clsLC);
  addCommentBtn.classList.add(...clsLC);

  commentInput.cols = "60";
  commentInput.rows = "10";

  let clsCI = ["textarea", "toggle_visible"];
  commentInput.classList.add(...clsCI);
  let clsP = ["button", "is-outlined", "is-info", "toggle_visible"];
  postCommentBtn.classList.add(...clsP);

  const clsCS = ["button", "is-outlined", "is-info"];
  commentSpan.classList.add(...clsCS);

  let commentBtnText = create.text("Add comment");
  let postCommentBtnText = create.text("Post");
  let commentSpanText = create.text("See comments: " + amountOfComments);

  commentSpan.appendChild(commentSpanText);
  commentBtn.appendChild(commentBtnText);
  postCommentBtn.appendChild(postCommentBtnText);

  postCommentBtn.disabled = true;
  commentInput.onkeyup = function() {
    if (commentInput.value !== "") {
      postCommentBtn.disabled = false;
    } else {
      postCommentBtn.disabled = true;
    }
  };

  commentBtn.onclick = function() {
    commentInput.classList.toggle("toggle_visible");
    postCommentBtn.classList.toggle("toggle_visible");
  };

  postCommentBtn.onclick = function() {
    let body = new FormData();
    let route = "comments";
    body.append("content", commentInput.value);
    body.append("createdBy", sessionStorage.getItem("userID"));
    body.append("entryID", entryID);

    api.post(route, body);

    location.reload();
  };

  commentsContainer.appendChild(commentSpan);
  commentsContainer.appendChild(commentsWrapper);
  commentsContainer.appendChild(commentBtn);
  commentsContainer.appendChild(commentInput);
  commentsContainer.appendChild(postCommentBtn);

  return commentsContainer;
}

function commentsBuilder(comment) {
  let commentElement = create.elem("div");
  let createdBy = create.elem("h2");
  let date = create.elem("span");
  let content = create.elem("p");
  let commentDeleteBtn = create.elem("button");

  const clsCDB = ["button", "is-outlined", "is-danger", "is-small"];
  commentDeleteBtn.classList.add(...clsCDB);

  let createdByText = create.text("user: " + comment.username);
  let dateText = create.text(comment.createdAt);
  date.classList.add("comments-date-style");
  let contentText = create.text("comment: " + comment.content);
  let commentDeleteBtnText = create.text("Delete");

  createdBy.appendChild(createdByText);
  date.appendChild(dateText);
  content.appendChild(contentText);
  commentDeleteBtn.appendChild(commentDeleteBtnText);

  commentElement.appendChild(createdBy);
  commentElement.appendChild(date);
  commentElement.appendChild(content);

  // Appends delete button if the user is the creator of the comment or admin

  if (
    sessionStorage["admin"] == 1 ||
    sessionStorage["userID"] == comment.createdBy
  ) {
    commentElement.appendChild(commentDeleteBtn);
  }

  commentDeleteBtn.onclick = function() {
    api.remove("comments", comment.commentID);
    location.reload();
  };

  return commentElement;
}
