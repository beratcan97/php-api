const builder = (function() {
  const create = {
    elem: arg => document.createElement(arg.toString()),
    text: arg => document.createTextNode(arg.toString())
  };

  function commentsBuilder(comment) {
    let commentElement = create.elem("div");
    let createdBy = create.elem("h2");
    let date = create.elem("span");
    let content = create.elem("p");
    let commentDeleteBtn = create.elem("button");
   const clsCDB = ["button", "is-outlined", "is-danger"];
   commentDeleteBtn.classList.add(...clsCDB);

    let createdByText = create.text("user: " + comment.username);
    let dateText = create.text("date: " + comment.createdAt);
    let contentText = create.text("comment: " + comment.content);
        let commentDeleteBtnText = create.text("Delete");

    createdBy.appendChild(createdByText);
    date.appendChild(dateText);
    content.appendChild(contentText);
    commentDeleteBtn.appendChild(commentDeleteBtnText); 

    commentElement.appendChild(createdBy);
    commentElement.appendChild(date);
    commentElement.appendChild(content);
    commentElement.appendChild(commentDeleteBtn);

    commentDeleteBtn.onclick = function() {
      api.remove("comments", comment.commentID);
      location.reload();
    }

    // DELETE THIS WHEN STYLING IS DONE
    commentElement.style.border = "1px solid black";

    return commentElement;
  }

  async function entries(entry, comments, likes) {
    let amountOfComments;
    let amountOfLikes;

    let entryWrapper = create.elem("div");
    let title = create.elem("h1");

    //BUTTONS
    let editBtn = create.elem("button");
    const clsE = ["button", "is-outlined", "is-success"];
    editBtn.classList.add(...clsE);

    let deleteBtn = create.elem("button");
    const clsD = ["button", "is-outlined", "is-danger"];
    deleteBtn.classList.add(...clsD);

    let likeBtn = create.elem("button");
    const clsLC = ["button", "is-outlined", "is-info"];
    likeBtn.classList.add(...clsLC);

    let commentBtn = create.elem("button");
    commentBtn.classList.add(...clsLC);

    let createdBy = create.elem("h2");
    let date = create.elem("span");
    let content = create.elem("p");
    let commentSpan = create.elem("p");
    let commentsWrapper = create.elem("div");
    let likeButton = create.elem("button");
    let addComment = create.elem("button");

    addComment.classList.add("button");
    addComment.classList.add("is-outlined");
    addComment.classList.add("is-info");

    let commentInput = create.elem("textarea");
    let postCommentBtn = create.elem("button");

    commentInput.cols = "60";
    commentInput.rows = "10";
    let clsCI = ["textarea", "toggle_visible"];
    commentInput.classList.add(...clsCI);
    let clsP = ["button", "is-outlined", "is-info", "toggle_visible"];
    postCommentBtn.classList.add(...clsP);

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

    if (!likes) {
      amountOfLikes = 0;
    } else {
      amountOfLikes = likes.length;
    }

    commentBtn.onclick = function() {
      commentInput.classList.toggle("toggle_visible");
      postCommentBtn.classList.toggle("toggle_visible");
    };

    deleteBtn.onclick = function() {
      api.remove("entries", entry.entryID);
      location.reload();
    }

    /*editBtn.onclick = function() {

      api.update("entries" + entry.entryID, body);
      location.reload();
    }*/

    likeBtn.onclick = async function() {
      var route = "likes";
      let body = new FormData();
      let checkUserID = false;
      let currentLikeID = 0;

      likes.forEach(like => {
        if (like.userID.includes(sessionStorage.getItem("userID"))) {
          checkUserID = true;
          currentLikeID = like.likeID;
        }
      });

      if (!checkUserID) {
        body.append("userID", sessionStorage.getItem("userID"));
        body.append("entryID", entry.entryID);
        api.post(route, body);

        let newLikes = await api.get("likes/" + entry.entryID);

        amountOfLikes = newLikes.data.length;
        likeBtn.innerHTML = amountOfLikes + " Likes";
        likes = newLikes.data;
      } else {
        api.remove(route, currentLikeID);
        let newLikes = await api.get("likes/" + entry.entryID);

        amountOfLikes = newLikes.data.length;
        likeBtn.innerHTML = amountOfLikes + " Likes";
        likes = newLikes.data;
      }
    };

    postCommentBtn.onclick = function(){
      let body = new FormData();
      let route = "comments";
      body.append("content", commentInput.value);
      body.append("createdBy", sessionStorage.getItem("userID"));
      body.append("entryID", entry.entryID);

      api.post(route, body);

      location.reload();
    }

    let titleText = create.text(entry.title);
    let editText = create.text("Edit");
    let deleteText = create.text("Delete");
    let contentText = create.text(entry.content);
    let dateText = create.text(entry.createdAt);
    let createdByText = create.text("written by: " + entry.entryUsername);
    let commentSpanText = create.text(amountOfComments + " comments");
    let likeBtnText = create.text(amountOfLikes + " Likes");
    let commentBtnText = create.text("Add comment");
    let postCommentBtnText = create.text("Post");

    entryWrapper.classList.add("entries_wrapper");

    title.appendChild(titleText);
    editBtn.appendChild(editText);
    deleteBtn.appendChild(deleteText);
    createdBy.appendChild(createdByText);
    date.appendChild(dateText);
    content.appendChild(contentText);
    commentSpan.appendChild(commentSpanText);
    likeBtn.appendChild(likeBtnText);
    commentBtn.appendChild(commentBtnText);
    postCommentBtn.appendChild(postCommentBtnText);

    entryWrapper.appendChild(title);
    entryWrapper.appendChild(editBtn);
    entryWrapper.appendChild(deleteBtn);
    entryWrapper.appendChild(createdBy);
    entryWrapper.appendChild(content);
    entryWrapper.appendChild(date);
    entryWrapper.appendChild(commentSpan);
    entryWrapper.appendChild(commentsWrapper);
    entryWrapper.appendChild(likeBtn);
    entryWrapper.appendChild(commentBtn);
    entryWrapper.appendChild(commentInput);
    entryWrapper.appendChild(postCommentBtn);

    // DELETE THIS WHEN STYLING IS DONE
    entryWrapper.style.borderBottom = "1px solid black";
    entryWrapper.style.marginBottom = "25px";

    return entryWrapper;
  }

  return {
    entries: entries
  };
})();
