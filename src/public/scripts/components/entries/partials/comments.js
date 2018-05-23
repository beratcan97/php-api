import * as api from '../../../modules/fetch';
import { create } from '../../../modules/utils';

export async function Comments(comments, entryID) {
  // create wrappers
  const commentsContainer = create.elem('div');
  const commentsWrapper = create.elem('div');

  // create elements
  const commentSpan = create.elem('p');
  const commentInput = create.elem('textarea');
  const commentIcon = create.elem('i');
  const postCommentBtn = create.elem('button');
  const addCommentBtn = create.elem('button');
  const commentBtn = create.elem('button');
  const postIcon = create.elem('i');

  // set attributes
  commentInput.cols = '60';
  commentInput.rows = '10';
  postCommentBtn.disabled = true;

  // get classes
  const clsLC = ['button', 'is-info', 'is-small', 'comment-btn-style'];
  const clsCIcon = ['far', 'fa-comment', 'icons', 'medium'];
  const clsCW = ['box', 'comments-box'];
  const clsCI = ['textarea', 'toggle-visible'];
  const clsP = ['button', 'is-outlined', 'is-info', 'toggle-visible'];
  const clsCS = ['button', 'is-outlined', 'is-info', 'box'];
  const clsPI = ['fas', 'fa-paper-plane', 'icons'];

  // apply classes
  commentsWrapper.classList.add(...clsCW);
  postCommentBtn.classList.add(...clsP);
  addCommentBtn.classList.add(...clsLC);
  commentBtn.classList.add(...clsLC);
  commentIcon.classList.add(...clsCIcon);
  commentInput.classList.add(...clsCI);
  commentSpan.classList.add(...clsCS);
  postIcon.classList.add(...clsPI);

  // init amount of comments per entry
  let amountOfComments;

  if (!comments) {
    amountOfComments = 0;
  } else {
    amountOfComments = comments.length;
    comments.forEach((comment) => {
      const newComment = commentsBuilder(comment);
      commentsWrapper.appendChild(newComment);
    });

    commentsWrapper.classList.add('toggle-visible');

    commentSpan.onclick = function() {
      commentsWrapper.classList.toggle('toggle-visible');
    };
  }

  // create Text
  const commentBtnText = create.text('Add comment');
  const commentSpanText = create.text(`See comments: ${amountOfComments}`);

  // Event listeners
  commentInput.onkeyup = function() {
    if (commentInput.value !== '') {
      postCommentBtn.disabled = false;
    } else {
      postCommentBtn.disabled = true;
    }
  };

  commentBtn.onclick = function() {
    commentInput.classList.toggle('toggle-visible');
    postCommentBtn.classList.toggle('toggle-visible');
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

  // append text
  commentBtn.appendChild(commentBtnText);
  commentSpan.appendChild(commentSpanText);

  // append icons
  commentBtn.appendChild(commentIcon);
  postCommentBtn.appendChild(postIcon);

  // append stuff
  commentsContainer.appendChild(commentBtn);
  commentsContainer.appendChild(commentSpan);
  commentsContainer.appendChild(commentsWrapper);
  commentsContainer.appendChild(commentInput);
  commentsContainer.appendChild(postCommentBtn);

  return commentsContainer;
}

function commentsBuilder(comment) {
  // create elements
  const commentElement = create.elem('div');
  const createdBy = create.elem('a');
  const date = create.elem('span');
  const content = create.elem('p');
  const commentDeleteBtn = create.elem('button');
  const deleteIcon = create.elem('i');
  const hr = create.elem('hr');

  // set attributes
  createdBy.setAttribute('href', `/profile/${comment.username}`);

  // create text
  const createdByText = create.text(comment.username);
  const contentText = create.text(comment.content);
  const dateText = create.text(comment.createdAt);

  // get classes
  const clsCDB = ['button', 'is-outlined', 'is-danger', 'is-small'];
  const clsDI = ['fas', 'fa-trash-alt', 'icons'];

  // apply classes
  deleteIcon.classList.add(...clsDI);
  commentDeleteBtn.classList.add(...clsCDB);
  date.classList.add('comments-date-style');

  // append text
  createdBy.appendChild(createdByText);
  date.appendChild(dateText);
  content.appendChild(contentText);

  // append stuff
  commentElement.appendChild(createdBy);
  commentElement.appendChild(date);
  commentElement.appendChild(content);

  // only OP or admin may delete comments
  if (
    sessionStorage.admin === '1' ||
    sessionStorage.userID === comment.createdBy
  ) {
    commentDeleteBtn.onclick = function() {
      api.remove('comments', comment.commentID);
      location.reload();
    };

    commentDeleteBtn.appendChild(deleteIcon);
    commentElement.appendChild(commentDeleteBtn);
  }

  commentElement.appendChild(hr);

  return commentElement;
}
