import * as api from '../../fetch.js';
import { create } from '../../utils';

export async function makeAdmin(user) {

  let admin = false;
  const adminBtn = create.elem('button');

  const clsLC = ['button', 'is-outlined', 'is-info', 'is-small'];
  likeBtn.classList.add(...clsLC);

  if (user.admin == 0) {
    admin = false;
  } else {
    admin = true;
  }

  const adminBtnText = create.text(admin);
}