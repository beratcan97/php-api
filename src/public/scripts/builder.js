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
    let content = create.elem("p");
    let commentSpan = create.elem("span");

    let titleText = create.text(entry.title);
    let contentText = create.text(entry.content);
    let commentSpanText = create.text(amountOfComments + " comments");

    entryWrapper.classList.add("entries_wrapper");

    title.appendChild(titleText);
    content.appendChild(contentText);
    commentSpan.appendChild(commentSpanText);
    entryWrapper.appendChild(title);
    entryWrapper.appendChild(content);
    entryWrapper.appendChild(commentSpan);

    return entryWrapper;
  }

  return {
    entries: entries
  };
})();
