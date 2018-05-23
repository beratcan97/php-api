import { create } from '../../../modules/utils';
import * as api from '../../../modules/fetch';

export function makeAdminBtn(user) {
  let body = {};
  let changeAdmin = 0;
  let admin = 'Ej admin';

  if (user.admin !== '0') {
    admin = 'Admin';
  }

  const adminBtn = create.elem('button');
  const adminBtnText = create.text(admin);

  const clsLC = ['button', 'is-outlined', 'is-info', 'is-small'];
  adminBtn.classList.add(...clsLC);

  adminBtn.appendChild(adminBtnText);

  adminBtn.onclick = function() {
    user.admin === '1' ? (changeAdmin = 0) : (changeAdmin = 1);
    body = {
      id: user.userID,
      admin: changeAdmin,
    };
    api.updateUser(body);
    location.reload();
  };

  return adminBtn;
}
