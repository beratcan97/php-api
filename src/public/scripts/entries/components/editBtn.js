import * as api from "../../fetch.js";

export default async function EditBtn(entry) {
  let editBtn = create.elem("button");
  const clsE = ["button", "is-outlined", "is-success"];
  editBtn.classList.add(...clsE);

  let editText = create.text("Edit");
  editBtn.appendChild(editText);

  editBtn.onclick = function() {
    let editTitle = create.elem("input");
    let editContent = create.elem("textarea");
    let sendEditBtn = create.elem("button");
    let cancelEditBtn = create.elem("button");

    editTitle.setAttribute("type", "text");
    editContent.cols = "30";
    editContent.rows = "10";

    editTitle.value = titleText.textContent;
    editContent.value = contentText.textContent;
    sendEditBtn.innerHTML = "Confirm changes";
    cancelEditBtn.innerHTML = "Cancel edit";

    title.remove();
    content.remove();

    titleWrapper.appendChild(editTitle);
    contentWrapper.appendChild(editContent);
    contentWrapper.appendChild(sendEditBtn);
    contentWrapper.appendChild(cancelEditBtn);

    sendEditBtn.onclick = async function() {
      let body = {
        title: editTitle.value,
        content: editContent.value
      };
      let patchedEntry = await api.update("entries", entry.entryID, body);
      console.log(patchedEntry.data);
      cancelEdit(patchedEntry.data);
    };

    cancelEditBtn.onclick = async function() {
      let earlierData = await api.getOne("entries", entry.entryID);
      cancelEdit(earlierData.data);
    };

    async function cancelEdit(patchedEntry) {
      title = create.elem("h2");
      content = create.elem("p");

      titleText = create.text(patchedEntry.title);
      contentText = create.text(patchedEntry.content);

      title.appendChild(titleText);
      content.appendChild(contentText);

      editTitle.remove();
      editContent.remove();
      sendEditBtn.remove();
      cancelEditBtn.remove();

      titleWrapper.appendChild(title);
      contentWrapper.appendChild(content);
    }
  };

  return editBtn;
}
