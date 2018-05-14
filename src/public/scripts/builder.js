const builder = (function() {
  const create = {
    elem: arg => document.createElement(arg.toString()),
    text: arg => document.createTextNode(arg.toString())
  };

  function entries(entry, comments) {

    let amountOfComments;
    if (!comments) {
      amountOfComments = 0;
    } else {
      amountOfComments = comments.length;
    }

    let entryWrapper = create.elem("div");
    let title = create.elem("h1");
    let createdBy = create.elem("h2");
    let date = create.elem("span");
    let content = create.elem("p");
    let commentSpan = create.elem("span");

    let titleText = create.text(entry.title);
    let contentText = create.text(entry.content);
    let dateText = create.text(entry.createdAt);
    let createdByText = create.text("createdBy id: " + entry.createdBy);
    let commentSpanText = create.text(amountOfComments + " comments");

    entryWrapper.classList.add("entries_wrapper");

    title.appendChild(titleText);
    content.appendChild(contentText);
    date.appendChild(dateText);
    commentSpan.appendChild(commentSpanText);
    createdBy.appendChild(createdByText);
    entryWrapper.appendChild(title);
    entryWrapper.appendChild(createdBy);
    entryWrapper.appendChild(content);
    entryWrapper.appendChild(date);
    entryWrapper.appendChild(commentSpan);

    return entryWrapper;
  }

  return {
    entries: entries
  };
})();
