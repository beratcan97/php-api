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

  function entries(entry, comments) {
    let amountOfComments;

    let entryWrapper = create.elem("div");
    let title = create.elem("h1");
    let editBtn = create.elem("button");
    editBtn.classList.add("button");
    let deleteBtn = create.elem("button");
    editBtn.classList.add("is-success");
    deleteBtn.classList.add("button");
    deleteBtn.classList.add("is-danger");

    let createdBy = create.elem("h2");
    let date = create.elem("span");
    let content = create.elem("p");
    let commentSpan = create.elem("p");
    let commentsWrapper = create.elem("div");
    let likeButton = create.elem("button");

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
      likeButton.classList.add("is-info");

      commentSpan.onclick = function() {
        commentsWrapper.classList.toggle("toggle_visible");
      };
    }

    let titleText = create.text(entry.title);
    let editText = create.text("Edit");
    let deleteText = create.text("Delete");
    let contentText = create.text(entry.content);
    let dateText = create.text(entry.createdAt);
    let createdByText = create.text("written by: " + entry.entryUsername);
    let commentSpanText = create.text(amountOfComments + " comments");
    let likeButtonText = create.text("Like");

    entryWrapper.classList.add("entries_wrapper");

    title.appendChild(titleText);
    editBtn.appendChild(editText);
    deleteBtn.appendChild(deleteText);
    createdBy.appendChild(createdByText);
    date.appendChild(dateText);
    content.appendChild(contentText);
    commentSpan.appendChild(commentSpanText);
    likeButton.appendChild(likeButtonText);

    entryWrapper.appendChild(title);
    entryWrapper.appendChild(editBtn);
    entryWrapper.appendChild(deleteBtn);
    entryWrapper.appendChild(createdBy);
    entryWrapper.appendChild(content);
    entryWrapper.appendChild(date);
    entryWrapper.appendChild(commentSpan);
    entryWrapper.appendChild(commentsWrapper);
    entryWrapper.appendChild(likeButton);

    // DELETE THIS WHEN STYLING IS DONE
    entryWrapper.style.borderBottom = "1px solid black";
    entryWrapper.style.marginBottom = "25px";

    return entryWrapper;
  }

  return {
    entries: entries
  };
})();
