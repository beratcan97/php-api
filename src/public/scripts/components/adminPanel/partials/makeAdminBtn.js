import { create } from '../../../modules/utils';
import * as api from '../../../modules/fetch';

export function makeAdminBtn(user) {
  let admin = 'Ej admin';
  const adminBtn = create.elem('button');

  const clsLC = ['button', 'is-outlined', 'is-info', 'is-small'];
  adminBtn.classList.add(...clsLC);

  if (user.admin === '0') {
    admin = 'Ej admin';
  } else {
    admin = 'Admin';
  }

  const adminBtnText = create.text(admin);
  adminBtn.appendChild(adminBtnText);

  let body = {};

  adminBtn.onclick = function() {
    if (user.admin === '0') {
      body = {
        id: user.userID,
        admin: 1,
      };
    } else {
      body = {
        id: user.userID,
        admin: 0,
      };
    }
    api.updateUser(body);
    location.reload();
  };

  return adminBtn;
}
