import { remove } from '../../../modules/fetch';
import { create } from '../../../modules/utils';

export async function DeleteBtn(entry) {
  const deleteBtn = create.elem('button');
  const deleteIcon = create.elem('i');

  const clsD = ['button', 'is-outlined', 'is-danger'];
  const clsDI = ['fas', 'fa-trash-alt', 'icons'];

  deleteBtn.classList.add(...clsD);
  deleteIcon.classList.add(...clsDI);

  deleteBtn.appendChild(deleteIcon);

  deleteBtn.onclick = function() {
    remove('entries', entry.entryID);
    location.reload();
  };

  return deleteBtn;
}
