import * as api from "../../fetch.js";
import { create, isset } from "../../utils";

export async function DeleteBtn(entry) {
  let deleteBtn = create.elem("button");

  const clsD = ["button", "is-outlined", "is-danger"];
  deleteBtn.classList.add(...clsD);

  let deleteIcon = create.elem("i");
  deleteIcon.classList.add("fas");
  deleteIcon.classList.add("fa-trash-alt");
  deleteIcon.classList.add("icons");
  deleteBtn.appendChild(deleteIcon);

  deleteBtn.onclick = function(){
    api.remove("entries", entry.entryID);
    location.reload();
  };

  return deleteBtn;
}
