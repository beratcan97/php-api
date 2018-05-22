import { create } from '../../utils';

export function makeAdminBtn(user) {
  let admin = false;
  const adminBtn = create.elem('button');

  const clsLC = ['button', 'is-outlined', 'is-info', 'is-small'];
  adminBtn.classList.add(...clsLC);

  if (user.admin === 0) {
    admin = false;
  } else {
    admin = true;
  }

  const adminBtnText = create.text(admin);
  adminBtn.appendChild(adminBtnText);

  return adminBtn;
}
