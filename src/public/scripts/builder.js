const builder = (function() {
  const create = {
    elem: arg => document.createElement(arg.toString()),
    text: arg => document.createTextNode(arg.toString())
  };

  function entries(entryTitle, entryContent) {
    let entry = create.elem("div");
    let title = create.elem("h1");
    let content = create.elem("p");

    let titleText = create.text(entryTitle);
    let contentText = create.text(entryContent);

    entry.classList.add("entries_wrapper");

    title.appendChild(titleText);
    content.appendChild(contentText);
    entry.appendChild(title);
    entry.appendChild(content);

    return entry;
  }

  return {
    entries: entries
  };
})();
