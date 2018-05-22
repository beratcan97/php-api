import * as api from '../../../modules/fetch';
import { create, isset } from '../../../modules/utils';

export async function DeleteBtn(entry) {
  const deleteBtn = create.elem('button');

  const clsD = ['button', 'is-outlined', 'is-danger'];
  deleteBtn.classList.add(...clsD);

  const deleteIcon = create.elem('i');
  deleteIcon.classList.add('fas');
  deleteIcon.classList.add('fa-trash-alt');
  deleteIcon.classList.add('icons');
  deleteBtn.appendChild(deleteIcon);

  deleteBtn.onclick = function() {
    api.remove('entries', entry.entryID);
    location.reload();
  };

  return deleteBtn;
}
