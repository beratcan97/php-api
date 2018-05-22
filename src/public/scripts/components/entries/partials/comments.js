import * as api from '../../../modules/fetch';
import { create } from '../../../modules/utils';

export async function Comments(comments, entryID) {
  let amountOfComments;
  const commentsContainer = create.elem('div');
  const commentsWrapper = create.elem('div');
  commentsWrapper.classList.add('box');
  commentsWrapper.classList.add('comments-box');
  const commentSpan = create.elem('p');
  commentSpan.classList.add('box');
  const commentInput = create.elem('textarea');
  const postCommentBtn = create.elem('button');

  const addCommentBtn = create.elem('button');
  const commentBtn = create.elem('button');

  if (!comments) {
    amountOfComments = 0;
  } else {
    amountOfComments = comments.length;
    comments.forEach((comment) => {
      const newComment = commentsBuilder(comment);
      commentsWrapper.appendChild(newComment);
    });

    commentsWrapper.classList.add('toggle_visible');

    commentSpan.onclick = function() {
      commentsWrapper.classList.toggle('toggle_visible');
    };
  }

  const clsLC = ['button', 'is-info', 'is-small', 'comment-btn-style'];
  commentBtn.classList.add(...clsLC);
  addCommentBtn.classList.add(...clsLC);

  const commentIcon = create.elem('i');
  commentIcon.classList.add('far');
  commentIcon.classList.add('fa-comment');
  commentIcon.classList.add('icons');
  commentIcon.classList.add('medium');
  commentBtn.appendChild(commentIcon);

  commentInput.cols = '60';
  commentInput.rows = '10';

  const clsCI = ['textarea', 'toggle_visible'];
  commentInput.classList.add(...clsCI);
  const clsP = ['button', 'is-outlined', 'is-info', 'toggle_visible'];
  postCommentBtn.classList.add(...clsP);

  const clsCS = ['button', 'is-outlined', 'is-info'];
  commentSpan.classList.add(...clsCS);

  const commentBtnText = create.text('Add comment');
  const postIcon = create.elem('i');
  postIcon.classList.add('fas');
  postIcon.classList.add('fa-paper-plane');
  postIcon.classList.add('icons');
  postCommentBtn.appendChild(postIcon);

  const postCommentBtnText = create.text('Post');
  const commentSpanText = create.text(`See comments: ${amountOfComments}`);

  commentSpan.appendChild(commentSpanText);
  commentBtn.appendChild(commentBtnText);
  // postCommentBtn.appendChild(postCommentBtnText);

  postCommentBtn.disabled = true;
  commentInput.onkeyup = function() {
    if (commentInput.value !== '') {
      postCommentBtn.disabled = false;
    } else {
      postCommentBtn.disabled = true;
    }
  };

  commentBtn.onclick = function() {
    commentInput.classList.toggle('toggle_visible');
    postCommentBtn.classList.toggle('toggle_visible');
  };

  postCommentBtn.onclick = function() {
    const body = new FormData();
    const route = 'comments';
    body.append('content', commentInput.value);
    body.append('createdBy', sessionStorage.getItem('userID'));
    body.append('entryID', entryID);

    api.post(route, body);

    location.reload();
  };

  commentsContainer.appendChild(commentBtn);
  commentsContainer.appendChild(commentSpan);
  commentsContainer.appendChild(commentsWrapper);
  commentsContainer.appendChild(commentInput);
  commentsContainer.appendChild(postCommentBtn);

  return commentsContainer;
}

function commentsBuilder(comment) {
  const commentElement = create.elem('div');
  const createdBy = create.elem('a');
  const date = create.elem('span');
  const content = create.elem('p');
  const commentDeleteBtn = create.elem('button');

  const clsCDB = ['button', 'is-outlined', 'is-danger', 'is-small'];
  commentDeleteBtn.classList.add(...clsCDB);

  const createdByText = create.text(`user: ${comment.username}`);
  const dateText = create.text(comment.createdAt);
  const contentText = create.text(`comment: ${comment.content}`);
  date.classList.add('comments-date-style');
  const deleteIcon = create.elem('i');
  deleteIcon.classList.add('fas');
  deleteIcon.classList.add('fa-trash-alt');
  deleteIcon.classList.add('icons');
  commentDeleteBtn.appendChild(deleteIcon);

  date.classList.add('comments-date-style');

  createdBy.setAttribute('href', `/profile/${comment.username}`);

  createdBy.appendChild(createdByText);
  date.appendChild(dateText);
  content.appendChild(contentText);
  // commentDeleteBtn.appendChild(commentDeleteBtnText);

  commentElement.appendChild(createdBy);
  commentElement.appendChild(date);
  commentElement.appendChild(content);

  // Appends delete button if the user is the creator of the comment or admin

  if (
    sessionStorage.admin === '1' ||
    sessionStorage.userID === comment.createdBy
  ) {
    commentElement.appendChild(commentDeleteBtn);
  }
  const hr = create.elem('hr');
  commentElement.appendChild(hr);
  commentDeleteBtn.onclick = function() {
    api.remove('comments', comment.commentID);
    location.reload();
  };

  return commentElement;
}
