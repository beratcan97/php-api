import * as api from "../../fetch.js";

export default async function DeleteBtn(entry) {
  let deleteBtn = create.elem("button");

  const clsD = ["button", "is-outlined", "is-danger"];
  deleteBtn.classList.add(...clsD);

  let deleteText = create.text("Delete");
  deleteBtn.appendChild(deleteText);

  deleteBtn.onclick = function() {
    api.remove("entries", entry.entryID);
    location.reload();
  };

  return deleteBtn;
}
