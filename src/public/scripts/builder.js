const builder = (function() {
  const create = {
    elem: arg => document.createElement(arg.toString()),
    text: arg => document.createTextNode(arg.toString())
  };

  async function updateLikes(entryID) {
    let likesRoute = "likes/" + entryID;
    let likes = await api.get(likesRoute);
    return likes;
  }

  async function likesBuilder() {
    let amountOfLikes;

    let likeButton = create.elem("button");

    if (!likes) {
      amountOfLikes = 0;
    } else {
      amountOfLikes = likes.length;
    }

    likeButton.onclick = function() {
      var route = "likes";
      let body = new FormData();
      let checkUserID;
      let currentLikeID = 0;

      likes.forEach(like => {
        if (like.userID.includes(sessionStorage.getItem("userID"))) {
          checkUserID = true;
          currentLikeID = like.likeID;
        }
      });

      console.log(checkUserID);

      if (!hasLiked) {
        body.append("userID", sessionStorage.getItem("userID"));
        body.append("entryID", entry.entryID);
        api.post(route, body);
        amountOfLikes++;
        likeButton.innerHTML = amountOfLikes + " Likes";
      } else {
        api.remove(route, currentLikeID);
        amountOfLikes--;
        likeButton.innerHTML = amountOfLikes + " Likes";
      }
    };

    let likeButtonText = create.text(amountOfLikes + " Likes");
    likeButton.appendChild(likeButtonText);

    return likeButton;
  }

  function commentsBuilder(comment) {
    let commentElement = create.elem("div");
    let createdBy = create.elem("h2");
    let date = create.elem("span");
    let content = create.elem("p");

    let createdByText = create.text("user: " + comment.username);
    let dateText = create.text("date: " + comment.createdAt);
    let contentText = create.text("comment: " + comment.content);

    createdBy.appendChild(createdByText);
    date.appendChild(dateText);
    content.appendChild(contentText);

    commentElement.appendChild(createdBy);
    commentElement.appendChild(date);
    commentElement.appendChild(content);

    // DELETE THIS WHEN STYLING IS DONE
    commentElement.style.border = "1px solid black";

    return commentElement;
  }

  function entries(entry, comments, likes) {
    let amountOfComments;
    let amountOfLikes;

    let entryWrapper = create.elem("div");
    let title = create.elem("h1");

    let editBtn = create.elem("button");
    editBtn.classList.add("button");

    let deleteBtn = create.elem("button");
    editBtn.classList.add("is-outlined");
    editBtn.classList.add("is-success");
    deleteBtn.classList.add("button");
    deleteBtn.classList.add("is-outlined");
    deleteBtn.classList.add("is-danger");

    let createdBy = create.elem("h2");
    let date = create.elem("span");
    let content = create.elem("p");
    let commentSpan = create.elem("p");
    let commentsWrapper = create.elem("div");
    let likeButton = create.elem("button");
    let addComment = create.elem("button");
    let addCommentInput = create.elem("textarea");

    addComment.classList.add("button");
    addComment.classList.add("is-outlined");
    addComment.classList.add("is-info");

    addCommentInput.cols = "60";
    addCommentInput.rows = "10";
    addCommentInput.classList.add("toggle_visible");

    if (!comments) {
      amountOfComments = 0;
    } else {
      amountOfComments = comments.length;
      comments.forEach(comment => {
        let newComment = commentsBuilder(comment);
        commentsWrapper.appendChild(newComment);
      });

      commentsWrapper.classList.add("toggle_visible");
      likeButton.classList.add("button");
      likeButton.classList.add("is-outlined");
      likeButton.classList.add("is-info");

      commentSpan.onclick = function() {
        commentsWrapper.classList.toggle("toggle_visible");
      };
    }

    if (!likes) {
      amountOfLikes = 0;
    } else {
      amountOfLikes = likes.length;
    }

    addComment.onclick = function() {
      addCommentInput.classList.toggle("toggle_visible");
    };

    likeButton.onclick = function() {
      var route = "likes";
      let body = new FormData();
      let checkUserID;
      let currentLikeID = 0;

      likes.forEach(like => {
        if (like.userID.includes(sessionStorage.getItem("userID"))) {
          checkUserID = true;
          currentLikeID = like.likeID;
        }
      });

      console.log(checkUserID);

      if (!hasLiked) {
        body.append("userID", sessionStorage.getItem("userID"));
        body.append("entryID", entry.entryID);
        api.post(route, body);
        amountOfLikes++;
        likeButton.innerHTML = amountOfLikes + " Likes";
      } else {
        api.remove(route, currentLikeID);
        amountOfLikes--;
        likeButton.innerHTML = amountOfLikes + " Likes";
      }
    };

    let titleText = create.text(entry.title);
    let editText = create.text("Edit");
    let deleteText = create.text("Delete");
    let contentText = create.text(entry.content);
    let dateText = create.text(entry.createdAt);
    let createdByText = create.text("written by: " + entry.entryUsername);
    let commentSpanText = create.text(amountOfComments + " comments");
    let likeButtonText = create.text(amountOfLikes + " Likes");
    let addCommentText = create.text("Add comment");

    entryWrapper.classList.add("entries_wrapper");

    title.appendChild(titleText);
    editBtn.appendChild(editText);
    deleteBtn.appendChild(deleteText);
    createdBy.appendChild(createdByText);
    date.appendChild(dateText);
    content.appendChild(contentText);
    commentSpan.appendChild(commentSpanText);
    likeButton.appendChild(likeButtonText);
    addComment.appendChild(addCommentText);

    entryWrapper.appendChild(title);
    entryWrapper.appendChild(editBtn);
    entryWrapper.appendChild(deleteBtn);
    entryWrapper.appendChild(createdBy);
    entryWrapper.appendChild(content);
    entryWrapper.appendChild(date);
    entryWrapper.appendChild(commentSpan);
    entryWrapper.appendChild(commentsWrapper);
    entryWrapper.appendChild(likeButton);
    entryWrapper.appendChild(addComment);
    entryWrapper.appendChild(addCommentInput);

    // DELETE THIS WHEN STYLING IS DONE
    entryWrapper.style.borderBottom = "1px solid black";
    entryWrapper.style.marginBottom = "25px";

    return entryWrapper;
  }

  return {
    entries: entries
  };
})();
